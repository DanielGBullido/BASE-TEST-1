$(function() {  
    $(".base-pro-join").click(function(event) {
            event.preventDefault();
            uploadRequest('base-pro');
    });

    $(".base-core-y-join").click(function(event) {
            event.preventDefault();
            $('#myModal').modal('show');
    });

    $("#base-core").click(function(event) {
            event.preventDefault();
            uploadRequest('base-core');
        });

    $("#base-core-y").click(function(event) {
            event.preventDefault();
            uploadRequest('base-core-y');
    });
    
    $(".base-lite").click(function(event) {
        event.preventDefault();
        uploadRequest('base-lite');                  
    });
    
    $(".base-lite-monthly").click(function(event) {
        event.preventDefault();
        uploadRequest('base-lite-monthly');                  
    });

});

function uploadRequest(planID) {
    localStorage.setItem('plan-selected', planID);
    analytics.track('Plan Selected', {
        planName: planID
    });
   
    window.location.href = 'checkout-add';
}