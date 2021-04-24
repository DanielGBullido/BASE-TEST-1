function splitScroll() {
    const controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
        triggerElement: '.parallax-text-1',
        triggerHook: 0.8,
         reverse: true
    })
        .on("enter", function() {
            $(".parallax-text-1").css('color', '#000');
            $(".parallax-text-1").css('text-shadow', 'none');
            $(".parallax-text-2").css('color', 'transparent');
            $(".parallax-text-2").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-3").css('color', 'transparent');
            $(".parallax-text-3").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-4").css('color', 'transparent');
            $(".parallax-text-4").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $("#image-screenshot").attr("src","./img/strength_score.png");
         })
         .on("leave", function() {
        })
//         .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
         .addTo(controller);
    
     new ScrollMagic.Scene({
        triggerElement: '.parallax-text-2',
         triggerHook:  0.5,
         reverse: true
     })
        .on("enter", function() {
            $(".parallax-text-2").css('color', '#000');
            $(".parallax-text-2").css('text-shadow', 'none');
            $(".parallax-text-1").css('color', 'transparent');
            $(".parallax-text-1").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-3").css('color', 'transparent');
            $(".parallax-text-3").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-4").css('color', 'transparent');
            $(".parallax-text-4").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $("#image-screenshot").attr("src","./img/gaba_challenge_app.png");
         })
        .on("leave", function() {
            $(".parallax-text-1").css('color', '#000');
            $(".parallax-text-1").css('text-shadow', 'none');
        })
//        .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

    
    new ScrollMagic.Scene({
        triggerElement: '.parallax-text-3',
        triggerHook:  0.4,
        reverse: true
    })
        .on("enter", function() {
            $(".parallax-text-3").css('color', '#000');
            $(".parallax-text-3").css('text-shadow', 'none');
            $(".parallax-text-1").css('color', 'transparent');
            $(".parallax-text-1").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-2").css('color', 'transparent');
            $(".parallax-text-2").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-4").css('color', 'transparent');
            $(".parallax-text-4").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $("#image-screenshot").attr("src","./img/conversations_app.png");
         })
        .on("leave", function() {
            $(".parallax-text-1").css('color', '#000');
            $(".parallax-text-1").css('text-shadow', 'none');
            $(".parallax-text-2").css('color', '#000');
            $(".parallax-text-2").css('text-shadow', 'none');
//            $(".parallax-text-3").css('color', '#000');
//            $(".parallax-text-3").css('text-shadow', 'none');
        })
//         .addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
         .addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: '.parallax-text-4',
        triggerHook:  0.3,
        reverse: true
    })
        .on("enter", function() {
            $(".parallax-text-4").css('color', '#000');
            $(".parallax-text-4").css('text-shadow', 'none');
            $(".parallax-text-1").css('color', 'transparent');
            $(".parallax-text-1").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-2").css('color', 'transparent');
            $(".parallax-text-2").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $(".parallax-text-3").css('color', 'transparent');
            $(".parallax-text-3").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
            $("#image-screenshot").attr("src","./img/strength_score.png");
         })
        .on("leave", function() {
            $(".parallax-text-2").css('color', '#000');
            $(".parallax-text-3").css('color', '#000');
            $(".parallax-text-1").css('color', '#000');
            $(".parallax-text-4").css('color', '#000');
            $(".parallax-text-1").css('text-shadow', 'none');
            $(".parallax-text-2").css('text-shadow', 'none');
            $(".parallax-text-3").css('text-shadow', 'none');
            $(".parallax-text-4").css('text-shadow', 'none');
        })
//         .addIndicators({name: "3 (duration: 0)"}) // add indicators (requires plugin)
         .addTo(controller);
}

splitScroll();
