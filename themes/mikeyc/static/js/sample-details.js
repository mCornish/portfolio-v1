$( document ).ready(function() {
	$( '.js-novel' ).on('click', function() {
		$( '.js-novel-details' ).addClass( 'is-active' );
	});
	$( '.js-bowplease' ).on('click', function() {
		$( '.js-bowplease-details' ).addClass( 'is-active' );
	});
	$( '.js-close' ).on('click', function() {
		$( '.js-novel-details' ).removeClass( 'is-active' );
		$( '.js-bowplease-details' ).removeClass( 'is-active' );
	})
});
