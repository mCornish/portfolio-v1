$( document ).ready(function() {
	$('[data-hook=theme-change]').on('mouseenter', function() {
		var themeName = $( this ).attr( 'data-theme' );
		var themeClass = 'theme-' + themeName;
		$( 'body' ).addClass( themeClass );
	});
	$('[data-hook=theme-change]').on('mouseleave', function() {
		var themeName = $( this ).attr( 'data-theme' );
		var themeClass = 'theme-' + themeName;
		$( 'body' ).removeClass( themeClass );
	});
});
