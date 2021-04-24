function animateBlob() {
    const controller = new ScrollMagic.Controller();
    
    var tween = TweenMax.fromTo("#heroblob", 1,
										{},
										{left: 100, repeat: 0, yoyo: true, ease: Circ.easeInOut}
									);
    
    // build scene
    var scene = new ScrollMagic.Scene({
        triggerElement: "#blob-move", duration: 200})
				.setTween(tween)
				.addIndicators({name: "loop"}) // add indicators (requires plugin)
							.addTo(controller);
    
//    new ScrollMagic.Scene({
//        triggerElement: '.parallax-text-1',
//        triggerHook: 0.8,
//         reverse: true
//    })
//        .on("enter", function() {
//            $(".parallax-text-1").css('color', '#000');
//            $(".parallax-text-1").css('text-shadow', 'none');
//            $(".parallax-text-2").css('color', 'transparent');
//            $(".parallax-text-2").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
//            $(".parallax-text-3").css('color', 'transparent');
//            $(".parallax-text-3").css('text-shadow', '0 0 5px rgba(0,0,0,0.5)');
//         })
//         .on("leave", function() {
//        })
////         .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//         .addTo(controller);
    
     
}

animateBlob();
