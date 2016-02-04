$( document ).ready(function() {
	$( '.js-about-button' ).on('click', function() {
		$( '.js-about' ).addClass( 'is-active' );
		$( '.out-bot' ).addClass( 'is-active' );
	});
	$( '.js-close' ).on('click', function() {
		$( '.js-about' ).removeClass( 'is-active' );
		$( '.out-bot' ).removeClass( 'is-active' );
	});
});
