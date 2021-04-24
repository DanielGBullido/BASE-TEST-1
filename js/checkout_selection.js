$(function() {  
    $(".sleep-add").click(function(event) {
        event.preventDefault();
        onTrackSelected('sleep');
    });

    $(".stress-add").click(function(event) {
        event.preventDefault();
        onTrackSelected('stress');
    });

    $(".strength-add").click(function(event) {
        event.preventDefault();
        onTrackSelected('strength');
    });
    
    $(".sd-add").click(function(event) {
        event.preventDefault();
        onTrackSelected('sex-drive');
    });

    $(".diet-add").click(function(event) {
        event.preventDefault();
        onTrackSelected('diet');
    });

    $(".energy-add").click(function(event) {
        event.preventDefault();
        onTrackSelected('energy');           
    });

});

function onTrackSelected(track) {
    localStorage.setItem('os', track);
    analytics.track('Initiate Checkout', {
        trackID: track
    });
    window.location.href = 'checkout-plan';
}
