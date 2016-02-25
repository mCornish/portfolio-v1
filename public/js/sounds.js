$( document ).ready(function() {
	var wooshIn = new Audio('../sound/woosh-in.mp3');
	var wooshOut = new Audio('../sound/woosh.mp3');
	wooshIn.volume = .2;
	wooshOut.volume = .2;
	$( '.js-about-button' ).on( 'click', function() {
		wooshIn.play();
	});
	$( '.js-novel' ).on( 'click', function() {
		wooshIn.play();
	});
	$( '.js-bowplease' ).on( 'click', function() {
		wooshIn.play();
	});
	$( '.js-close' ).on( 'click', function() {
		wooshOut.play();
	});
});
