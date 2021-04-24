function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.parallax-text-1-p',
        triggerHook: 0.5,
        reverse: true
    })
        .on("enter", function() {
        $(".parallax-text-1-p").css('color', '#000');
        $(".parallax-text-1-p").css('text-shadow', 'none');
        $(".parallax-text-2-p").css('color', 'transparent');
        $(".parallax-text-2-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-3-p").css('color', 'transparent');
        $(".parallax-text-3-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-4-p").css('color', 'transparent');
        $(".parallax-text-4-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $("#image-screenshot-p").attr("src","./img/diet_score_app.png");
    })
        .on("leave", function() {
    })
    //         .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.parallax-text-2-p',
        triggerHook:  0.5,
        reverse: true
    })
        .on("enter", function() {
        $(".parallax-text-2-p").css('color', '#000');
        $(".parallax-text-2-p").css('text-shadow', 'none');
        $(".parallax-text-1-p").css('color', 'transparent');
        $(".parallax-text-1-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-3-p").css('color', 'transparent');
        $(".parallax-text-3-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-4-p").css('color', 'transparent');
        $(".parallax-text-4-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $("#image-screenshot-p").attr("src","./img/personalized_plan.png");
    })
        .on("leave", function() {
        $(".parallax-text-1-p").css('color', '#000');
        $(".parallax-text-1-p").css('text-shadow', 'none');
    })
    //        .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: '.parallax-text-3-p',
        triggerHook:  0.4,
        reverse: true
    })
        .on("enter", function() {
        $(".parallax-text-3-p").css('color', '#000');
        $(".parallax-text-3-p").css('text-shadow', 'none');
        $(".parallax-text-1-p").css('color', 'transparent');
        $(".parallax-text-1-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-2-p").css('color', 'transparent');
        $(".parallax-text-2-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-4-p").css('color', 'transparent');
        $(".parallax-text-4-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $("#image-screenshot-p").attr("src","./img/timeline_app.png");
    })
        .on("leave", function() {
        $(".parallax-text-1-p").css('color', '#000');
        $(".parallax-text-1-p").css('text-shadow', 'none');
        $(".parallax-text-2-p").css('color', '#000');
        $(".parallax-text-2-p").css('text-shadow', 'none');
        //            $(".parallax-text-3").css('color', '#000');
        //            $(".parallax-text-3").css('text-shadow', 'none');
    })
    //         .addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.parallax-text-4-p',
        triggerHook:  0.3,
        reverse: true
    })
        .on("enter", function() {
        $(".parallax-text-4-p").css('color', '#000');
        $(".parallax-text-4-p").css('text-shadow', 'none');
        $(".parallax-text-1-p").css('color', 'transparent');
        $(".parallax-text-1-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-2-p").css('color', 'transparent');
        $(".parallax-text-2-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $(".parallax-text-3-p").css('color', 'transparent');
        $(".parallax-text-3-p").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
        $("#image-screenshot-p").attr("src","./img/app_improve.png");
    })
        .on("leave", function() {
        $(".parallax-text-2-p").css('color', '#000');
        $(".parallax-text-3-p").css('color', '#000');
        $(".parallax-text-1-p").css('color', '#000');
        $(".parallax-text-4-p").css('color', '#000');
        $(".parallax-text-1-p").css('text-shadow', 'none');
        $(".parallax-text-2-p").css('text-shadow', 'none');
        $(".parallax-text-3-p").css('text-shadow', 'none');
        $(".parallax-text-4-p").css('text-shadow', 'none');
    })
    //         .addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);
}

splitScroll();
