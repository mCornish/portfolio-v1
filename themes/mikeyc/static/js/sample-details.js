$( document ).ready(function() {
	$( '[data-hook=sample]' ).on('click', function() {
		$( this ).addClass( 'is-expanded' );
	});
});
