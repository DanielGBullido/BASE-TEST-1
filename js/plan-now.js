//Only used on cart
async function loadPayNow(totalFromCartCents) {    
    var stripeKey = await startStripe();
    var stripe = Stripe(stripeKey);
    
    var paymentRequest = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Total',
                amount: totalFromCartCents,
            },
            requestPayerName: true,
            requestPayerEmail: true,
        });    

    var elements = stripe.elements();
    var prButton = elements.create('paymentRequestButton', {
        paymentRequest: paymentRequest,
    });
    
    if (totalFromCartCents > 50) {
         // Check the availability of the Payment Request API first.
        paymentRequest.canMakePayment().then(function(result) {
            if ($("#payment-request-button")) {
                if (result) {
                    prButton.mount('#payment-request-button');
                } else {
                    document.getElementById('payment-request-button').style.display = 'none';
                }
            }
        });

        paymentRequest.on('paymentmethod', function(ev) {
            getPaymentIntent(stripe, ev, totalFromCartCents);
        });
    } else {
        prButton.unmount();
        $("#payment-request-button").hide();
    }
   
}

async function getPaymentIntent(stripe, ev, total) {
    return fetch('https://app.criystal.com/web/client/getParam', {
        method: 'get',
    }).then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw Error(response.statusText);
        }
    }).then(tokenParam => {      
        var planID = localStorage.getItem('plan-selected');

        if (!planID) {
            planID = 'base-lite';
        }

        // Get discountCode as well.
        // Get addedTests
        var bodyStr = JSON.stringify({
            tokenParam: tokenParam,
            total: total,
            customerEmail: ev.payerEmail,
            planID: planID
            // Add extra tests
        });

        return fetch('https://app.criystal.com/web/payments/getIntentToken', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyStr
        })
            .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                showCardError('We are sorry we could not process this payment method');
            }
        }).
        then(clientSecret => {
            // Confirm the PaymentIntent without handling potential next actions (yet).
            stripe.confirmCardPayment(
                clientSecret,
                {payment_method: ev.paymentMethod.id},
                {handleActions: false}
            ).then(function(confirmResult) {
                if (confirmResult.error) {
                    console.log('confirmRes error ' + clientSecret);
                    // Report to the browser that the payment failed, prompting it to
                    // re-show the payment interface, or show an error message and close
                    // the payment interface.
                    ev.complete('fail');
                    showCardError('We are sorry, something happened and we cannot process the payment. Please try again later or contact us.')
                } else {
                    const paymentMethod = ev.paymentMethod;
                    
                    if (paymentMethod) {
                        createCustomerForPayNow(paymentMethod, ev.payerEmail);
                    }
                    
                    localStorage.setItem('account_created', ev.payerEmail);
                    // Report to the browser that the confirmation was successful, prompting
                    // it to close the browser payment method collection interface.
                    ev.complete('success');
                    // Let Stripe.js handle the rest of the payment flow.
                    stripe.confirmCardPayment(clientSecret).then(function(result) {
                        if (result.error) {
                            console.log('confirmRPyErr ' + clientSecret);
                            showCardError('We are sorry we could not process this payment method');
                        } else {
                            console.log('orderComplete ' + clientSecret);
                            orderComplete();
                        }
                    });
                }
            });
        }).
        catch(error => {
            showCardError('We are sorry, something happened and we cannot process the payment. Please try again later or contact us.');
        })
    }).catch(error => {
        console.log(error);
        showCardError('We are sorry, something happened and we cannot process the payment. Please try again later or contact us.');
    });
} 

async function createCustomerForPayNow(paymentMethod, email) {
    return fetch('https://app.criystal.com/web/client/getParam', {
        method: 'get',
    }).then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw Error(response.statusText);
        }
    }).then(tokenParam => {      
        var planID = localStorage.getItem('plan-selected');
        var code = sessionStorage.getItem("code");
        var optionSelected = localStorage.getItem('os');
        var addedTestsStr = localStorage.getItem('aTk');
        var addedTests = [];
        if (addedTestsStr) {
            addedTests = JSON.parse(addedTestsStr);
        }

        if (!planID) {
            planID = 'base-lite';
        }

        var bodyStr = JSON.stringify({
            email: email,
            paymentMethod: paymentMethod.id,
            tokenParam: tokenParam,
            categorySelected: optionSelected,
            planSelected: planID,
            addedStarterTests: addedTests
        });


        if (code) {
            bodyStr = JSON.stringify({
                email: email,
                paymentMethod: paymentMethod.id,
                tokenParam: tokenParam,
                code: code,
                categorySelected: optionSelected,
                planSelected: planID,
                addedStarterTests: addedTests
            });
        }

        return fetch('https://app.criystal.com/web/subscription/intent-create-customer', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyStr
        })
            .then(response => {
            if (response.ok) { 
                sessionStorage.removeItem("pg");
                orderComplete();
            } else {
                orderComplete();
            }
        }).
        catch(error => {
            // TODO: We should alarm here
            showCardError('We are sorry, something happened and we cannot process the payment. Please try again later or contact us.');
        })
    }).catch(error => {
        // TODO: We should alarm here
        showCardError('We are sorry, something happened and we cannot process the payment. Please try again later or contact us.');
    }); 
}

async function startStripe() {
    var cardholderEmail = localStorage.getItem('account_created');
    var url = 'https://app.criystal.com/web/client/getStripeKey?email=' + cardholderEmail;
    
    return fetch(url, {
        method: 'get',
    }).then(response => {
        if (response.ok) {
            return response.text();
        } else {
            showCardError('We are sorry something happened and we cannot process the payment. Try again later or contact us.');
        }
    }).catch((error) => {
        console.log(error); 
        showCardError('We are sorry something happened and we cannot process the payment. Try again later or contact us.');
    });
}

/* ------- Post-payment helpers ------- */

function showCardError(error) {
    // TODO get different div
    // The card was declined (i.e. insufficient funds, card has expired, etc)
    var displayError = document.getElementById('card-errors');
    displayError.textContent = error;
    setTimeout(function() {
        displayError.textContent = '';
    }, 8000);
}


/* Shows a success / error message when the payment is complete */
var orderComplete = function() {
    window.location.href = 'successful_payment';
};
