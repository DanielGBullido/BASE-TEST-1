const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var trackID = urlParams.get('score');
var trackName = "Sleep";
var trackDescription = "It seems like a great night’s sleep could be a regular problem of yours, but you’re not alone. Around 90% of humans worldwide suffer from some sort of sleeping disorder.";
var trackDescription2 = "Start using Base to make data-driven decisions to improve your sleep. We’re going to take a look at how you produce Melatonin, the hormone that makes you sleepy, to pinpoint the root cause to your issues, monitor, and provide recommendations based on results.";
var trackDescription3 = " ";
$(".track-desc-body").load("sleep-desc.html");

$(".gradient-holder").attr("src", "img/gradient_sleep_downgrade.jpg");
if (trackID === '4') {
    localStorage.setItem('track-selected', 'energy');
    trackName = "Energy";
    var trackDescription = "It sounds like you might be feeling like you’re always running on empty, but you’re not alone. About 67% of the workforce say they feel tired during their workday, 53% feel less productive, and 44% have trouble focusing.";
    var trackDescription2 = "Start using Base to make data-driven decisions to improve your fatigue or brain fog. We’re going to take a look at your Vitamin levels to start with, given that there's an 80% of you being vitamin deficient, to pinpoint the root cause to your issues, monitor, and provide recommendations based on results.";
    var trackDescription3 = "";

    $(".track-desc-body").load("energy-desc.html");

    $(".gradient-holder").attr("src", "img/gradient_energy.jpg");
    $(".image-screenshot").attr("src", "img/energy_score.png");
    $("#test-collection").attr("src", "img/prick_black.gif");
    $("#collection-text").text("We'll collect your test with a fingerprick test, it’s easier than you think. We promise! If you’re still feeling nervous about it, at checkout, you have the option to go to a nearby Quest.");
} else if (trackID === '3') {
    localStorage.setItem('track-selected', 'diet');
    trackName = "Diet";
    var trackDescription = "Your diet is critical and, in many cases, can affect your energy, sleep, weight, and more. It’s important to make sure your diet is balanced to support your health goals and not the reason you can’t achieve them.";
    var trackDescription2 = "Start using Base to make data-driven decisions to improve your diet. To start, we are going to take a look at how you balance fats and sugar to pinpoint the root cause to your diet imbalances and provide recommendations based on results.";
    var trackDescription3 = "";

    $(".track-desc-body").load("diet-desc.html");
    $(".image-screenshot").attr("src", "img/diet_score_app.png");
    $(".gradient-holder").attr("src", "img/gradient_immunity.jpg");
    $("#test-collection").attr("src", "img/prick_black.gif");
    $("#collection-text").text("We'll collect your test with a fingerprick test, it’s easier than you think. We promise! If you’re still feeling nervous about it, at checkout, you have the option to go to a nearby Quest.");
} else if (trackID === '5') {
    localStorage.setItem('track-selected', 'stress');
    trackName = "Stress";

    var trackDescription = "It sounds like stress could be a problem area for you. We don’t recommend just burying your stress deep down until your next vacation. Ignoring it won’t help solve the problem or cure the symptoms. In fact, 77% of people experience stress that directly affects their physical health and stress can manifest itself in different ways: anxious feelings, inability to sleep, jaw clenching and others.";
    var trackDescription2 = "Start using Base to make data-driven decisions to improve your stress. We’re going to take a look at how you produce Cortisol, the hormone that makes you feel stressed, to pinpoint the root cause to your issues, monitor, and provide recommendations based on results.";
    var trackDescription3 = "";

    $(".track-desc-body").load("stress-desc.html");
    $(".image-screenshot").attr("src", "img/stress_score.png");
    $(".gradient-holder").attr("src", "img/gradient_stress.jpg");
} else if (trackID === '6') {
    localStorage.setItem('track-selected', 'sleep');
    trackName = "Sleep";
    
    $(".gradient-holder").attr("src", "img/gradient_sleep_downgrade.jpg");
} else if (trackID === '1') {
    localStorage.setItem('track-selected', 'strength');
    trackName = "Strength";
    var trackDescription = "It sounds like knowing your testosterone levels is important to you. If you’re looking to keep an eye on your testosterone, tracking strength is the best way to get the insights you need. ";
    var trackDescription2 = "Even if you aren’t focused on a goal right now, or you just want to see how your body is reacting to seasonal and lifestyle changes, you can still learn a lot and make small adjustments to keep up with where you need your levels.";
    var trackDescription3 = "Start keeping an eye on the biomarker levels you need with our quarterly testing, and insights plan.";
    
    $(".track-desc").hide();
    $(".gradient-holder").attr("src", "img/gradient_strength.jpg");
    $(".image-screenshot").attr("src", "img/energy_score.png");
} 

$(".track-name").text(trackName);
$("#track-description-1").text(trackDescription);
$("#track-description-2").text(trackDescription2);
$("#track-description-3").text(trackDescription3);
if (trackID !== '1') {
    $(".track-desc").show();
}

var name = urlParams.get('name');
$(".name-var").text(name);

analytics.track('Quiz Complete', {
    trackID: trackID
});