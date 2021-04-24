var emailStored = localStorage.getItem('email');
if (emailStored != null && emailStored != '') {
    document.getElementById('userEmail').placeholder = emailStored;
    $('#userEmail').attr('readonly', false);
} else {
    $('#userEmail').attr('readonly', false);
    document.getElementById('userEmail').placeholder = 'Email Address';
}

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();    
    localStorage.setItem('account_created', profile.getEmail());
    
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;

    var googleTokenURL = 'https://app.criystal.com/web/auth/registerGoogleToken';

    var body = {
        "googleToken": id_token
    };

    $.ajax({
        url: googleTokenURL,
        type: 'POST',
        data: JSON.stringify(body),
        beforeSend: function (req) {
            req.setRequestHeader("Content-Type", "application/json");
        },
        success: function(data) {
            onSignInPage();
        },
        error: function(request, status) {
            onSignInPage();
        }
    });
}

$("#login-button").click(function(event) {
    event.preventDefault();

    $("#checkout-button-plan_GKFWN8kzGvEGFD").text("Log in");
    $("#login-button").text("Or create account");

    $("#login-button").attr("id", "create-button");
    $("#create-button").on("click", function(){
        location.reload();
    });
});

//hang on event of form with id=myform
$("#form-subscribe").submit(function(e) {

    //prevent Default functionality
    e.preventDefault();

    var actionurl = 'https://app.criystal.com/web/user/signup';
    var tokenUrl = 'https://app.criystal.com/web/client/getParam';

    $.ajax({
        url: tokenUrl,
        type: 'GET',
        success: function(data) {
            var email = document.getElementById('userEmail').value;
            if (email === null || email == '') {
                email = emailStored;
            }
            localStorage.setItem('email', email);

            var password = document.getElementById('passwordSubs').value;

            var body = {
                "email": email,
                "username": email,
                "password": password,
                "tokenParam": data
            };

            $.ajax({
                url: actionurl,
                type: 'POST',
                data: JSON.stringify(body),
                beforeSend: function (req) {
                    req.setRequestHeader("Content-Type", "application/json");
                },
                success: function(data) {
                    localStorage.setItem('account_created', email);
                    onSignInPage();
                },
                error: function(request, status) {
                    var displayError = document.getElementById('error-message');
                    var shouldDisplayGenericError = true;

                    if (request.responseText) {
                        var responseText = JSON.parse(request.responseText);
                        if (responseText["status"]) {
                            console.log(responseText.status);
                            switch (responseText["status"]) {
                                case 400:
                                    if (responseText["message"] === 'user already exists') {
                                        displayError.textContent = 'The user already exists. Please try a different email or log in using your password.';
                                        shouldDisplayGenericError = false;
                                    }
                                    break;
                            }
                        } 
                    }                         
                    if (shouldDisplayGenericError) {
                        displayError.textContent = 'We are sorry something happened. Please try again or send us a message.';
                    }
                }
            });

        },
        error: function(request, status) {
            var displayError = document.getElementById('error-message');
            var shouldDisplayGenericError = true;

            if (request.responseText) {
                var responseText = JSON.parse(request.responseText);
                if (responseText["status"]) {
                    console.log(responseText.status);
                    switch (responseText["status"]) {
                        case 400:
                            if (responseText["message"] === 'user already exists') {
                                displayError.textContent = 'The user already exists. Please try a different email or log in using your password.';
                                shouldDisplayGenericError = false;
                            }
                            break;
                        case 500:
                            if (responseText["message"] === 'invalid_credentials') {
                                displayError.textContent = 'The user already exists and/or the credentials are invalid.';
                                shouldDisplayGenericError = false;
                            }
                            break;
                    }
                } 
            }                         
            if (shouldDisplayGenericError) {
                displayError.textContent = 'We are sorry something happened. Please try again or send us a message.';
            }
        }
    });

});

