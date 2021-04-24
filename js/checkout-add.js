$(function() {  
    $(".sleep-add").click(function(event) {
        event.preventDefault();
        if ($(".sleep-add").text() === "Added") {
            removeTrack('sleep', $("#sleep-btn"), $(".sleep-add"));
        } else {
            addTrack('sleep');
        }
    });

    $(".stress-add").click(function(event) {
        event.preventDefault();
        if ($(".stress-add").text() === "Added") {
            removeTrack('stress', $("#stress-btn"), $(".stress-add"));
        } else {
            addTrack('stress');
        }
    });

    $(".strength-add").click(function(event) {
        event.preventDefault();
        if ($(".strength-add").text() === "Added") {
            removeTrack('strength', $("#strength-btn"), $(".strength-add"));
        } else {
            addTrack('strength');
        }
    });
    
    $(".sd-add").click(function(event) {
        event.preventDefault();
        if ($(".sd-add").text() === "Added") {
            removeTrack('sex-drive', $("#sd-btn"), $(".sd-add"));
        } else {
            addTrack('sex-drive');
        }
    });

    $(".diet-add").click(function(event) {
        event.preventDefault();
        if ($(".diet-add").text() === "Added") {
            removeTrack('diet', $("#diet-btn"), $(".diet-add"));
        } else {
            addTrack('diet');
        }
    });

    $(".energy-add").click(function(event) {
        event.preventDefault();
        if ($(".energy-add").text() === "Added") {
            removeTrack('energy', $("#energy-btn"), $(".energy-add"));
        } else {
            addTrack('energy');
        }
    });

    var starterTest = localStorage.getItem('os');
    if (starterTest === 'sleep') {
        $("#sleep-btn").css("background-color", "#fff");
        $("#sleep-btn").css("color", "#000");
        $(".sleep-add").text("Starter");
    }
    if (starterTest === 'stress') {
        $("#stress-btn").css("background-color", "#fff");
        $("#stress-btn").css("color", "#000");
        $(".stress-add").text("Starter");
    }
    if (starterTest === 'strength') {
        $("#strength-btn").css("background-color", "#fff");
        $("#strength-btn").css("color", "#000");
        $(".strength-add").text("Starter");
    }
    if (starterTest === 'sex-drive') {
        $("#sd-btn").css("background-color", "#fff");
        $("#sd-btn").css("color", "#000");
        $(".sd-add").text("Starter");
    }
    if (starterTest === 'diet') {
        $("#diet-btn").css("background-color", "#fff");
        $("#diet-btn").css("color", "#000");
        $(".diet-add").text("Starter");
    }
    if (starterTest === 'energy') {
        $("#energy-btn").css("background-color", "#fff");
        $("#energy-btn").css("color", "#000");
        $(".energy-add").text("Starter");
    }
    
    var addedTracksStr = localStorage.getItem('aTk');
    if(!addedTracksStr || addedTracksStr === '') {
        $(".continue-button").text("NotNow");
    } else {
        // Make sure the starter is not added
        addedTracks = new Set(JSON.parse(addedTracksStr));
        addedTracks.delete(starterTest);
        localStorage.setItem('aTk', JSON.stringify(Array.from(addedTracks)));
    }
    
    var isQuizS = localStorage.getItem('track-selected');
    if (starterTest === 'strength' || (isQuizS && isQuizS === 'strength')) {
        $(".sd-track").hide();
        $(".strength-track").show();
    }

});

$(function() {  
    refreshButtons();
});

function addTrack(track) {
    $(".continue-button").text("Continue");
    var addedTracksStr = localStorage.getItem('aTk');
    var addedTracks;
    if(addedTracksStr) {
        addedTracks = new Set(JSON.parse(addedTracksStr));
    } else {
        addedTracks = new Set([]);
    }

    addedTracks.add(track);
    localStorage.setItem('aTk', JSON.stringify(Array.from(addedTracks)));
    refreshButtons();
}


function removeTrack(track, button, textSpan) {
    var addedTracksStr = localStorage.getItem('aTk');
    var addedTracks;
    if(addedTracksStr) {
        addedTracks = new Set(JSON.parse(addedTracksStr));
        addedTracks.delete(track);
        localStorage.setItem('aTk', JSON.stringify(Array.from(addedTracks)));
    } 

    if (button) {
        button.css("background-color", "#000");
        button.css("color", "#fff");
    }

    if (textSpan) {
        textSpan.html("AddTrack <img style=\"max-width: 1em;\" src=\"img/base_arrow_white.svg\" alt=\"Arrow to click and learn more\">");
    }
}

function refreshButtons() {
    var addedTracksStr = localStorage.getItem('aTk');
    if(addedTracksStr) {
        var addedTracks = JSON.parse(addedTracksStr);

        for (x of addedTracks) {
            if (x === 'sleep') {
                $("#sleep-btn").css("background-color", "#fff");
                $("#sleep-btn").css("color", "#000");
                $(".sleep-add").text("Added");
            }
            if (x === 'stress') {
                $("#stress-btn").css("background-color", "#fff");
                $("#stress-btn").css("color", "#000");
                $(".stress-add").text("Added");
            }
            if (x === 'strength') {
                $("#strength-btn").css("background-color", "#fff");
                $("#strength-btn").css("color", "#000");
                $(".strength-add").text("Added");
            }
            if (x === 'diet') {
                $("#diet-btn").css("background-color", "#fff");
                $("#diet-btn").css("color", "#000");
                $(".diet-add").text("Added");
            }
            if (x === 'energy') {
                $("#energy-btn").css("background-color", "#fff");
                $("#energy-btn").css("color", "#000");
                $(".energy-add").text("Added");
            }
            if (x === 'sex-drive') {
                $("#sd-btn").css("background-color", "#fff");
                $("#sd-btn").css("color", "#000");
                $(".sd-add").text("Added");
            }
        }
    }
}
