Reveal.addEventListener( 'ready', function( event ) {
    // event.currentSlide, event.indexh, event.indexv
    $("body").addClass("loaded");
} );


Reveal.addEventListener( 'fragmentshown', function( event ) {
    if (event.fragment.id === "text-contribution") {
    	$("#contribution .ap-canvas").animate({
    		opacity: 0.2
    	},500);
    	
    }
}, false );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    if (event.fragment.id === "text-contribution") {
    	$("#contribution .ap-canvas").animate({
    		opacity: 1.0
    	},500);
    	
    }
}, false );