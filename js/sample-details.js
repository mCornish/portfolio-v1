$( document ).ready(function() {
<<<<<<< HEAD
	$( '.js-novel' ).on('click', function() {
		$( '.js-novel-details' ).addClass( 'is-active' );
		$( '.out-right' ).addClass( 'is-active' );
=======
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
>>>>>>> 5858b974eafc1a4ec53e64451e251284d3c6c41a
	});
	$( '.js-bowplease' ).on('click', function() {
		$( '.js-bowplease-details' ).addClass( 'is-active' );
		$( '.out-left' ).addClass( 'is-active' );
<<<<<<< HEAD
=======
    window.history.pushState( {}, '', '#bowplease' );
>>>>>>> 5858b974eafc1a4ec53e64451e251284d3c6c41a
	});
	$( '.js-close' ).on('click', function() {
		$( '.js-novel-details' ).removeClass( 'is-active' );
		$( '.js-bowplease-details' ).removeClass( 'is-active' );
		$( '.out-right' ).removeClass( 'is-active' );
		$( '.out-left' ).removeClass( 'is-active' );
<<<<<<< HEAD
=======
    window.history.pushState( {}, '', '/' );
>>>>>>> 5858b974eafc1a4ec53e64451e251284d3c6c41a
	})
});
