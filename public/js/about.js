$( document ).ready(function() {
	// Set initial state
	var hash = window.location.hash.slice(1);
	if ( hash.toLowerCase() === 'about' ) {
		$( '.js-about' ).addClass( 'is-active' );
	}

	$( '.js-about-button' ).on('click', function() {
		$( '.js-about' ).addClass( 'is-active' );
		$( '.out-bot' ).addClass( 'is-active' );
		window.history.pushState( {}, '', '#about' );
	});
	$( '.js-close' ).on('click', function() {
		$( '.js-about' ).removeClass( 'is-active' );
		$( '.out-bot' ).removeClass( 'is-active' );
		window.history.pushState( {}, '', '/' );
	});
});
