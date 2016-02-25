$( document ).ready(function() {
  // Set initial state
	var hash = window.location.hash.slice(1);
	if ( hash.toLowerCase() === 'novel' ) {
		$( '.js-novel-details' ).addClass( 'is-active' );
	} else if ( hash.toLowerCase() === 'bowplease' ) {
    $( '.js-bowplease-details' ).addClass( 'is-active' );
  }

	$( '.js-novel' ).on('click', function() {
		$( '.js-novel-details' ).addClass( 'is-active' );
		$( '.out-right' ).addClass( 'is-active' );
    window.history.pushState( {}, '', '#novel' );
	});
	$( '.js-bowplease' ).on('click', function() {
		$( '.js-bowplease-details' ).addClass( 'is-active' );
		$( '.out-left' ).addClass( 'is-active' );
    window.history.pushState( {}, '', '#bowplease' );
	});
	$( '.js-close' ).on('click', function() {
		$( '.js-novel-details' ).removeClass( 'is-active' );
		$( '.js-bowplease-details' ).removeClass( 'is-active' );
		$( '.out-right' ).removeClass( 'is-active' );
		$( '.out-left' ).removeClass( 'is-active' );
    window.history.pushState( {}, '', '/' );
	})
});
