//Splide
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
		'cover'      : true,
        type   : 'loop',
		'heightRatio': 0.5,
        'autoplay':true,
        'interval':2000,
        'pauseOnHover':false,
        'pauseOnFocus': false

	} ).mount();
} );