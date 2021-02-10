/*----------------------------------------------------------------------------*
	$SLIDERS.js
*----------------------------------------------------------------------------*/


/* ^Slider Home
-----------------------------------------------------------------------------*/

	$('.js-slider-home').slick({
		infinite: true,
		dots: false,
		// fade: true,
		touchMove: false,
		draggable: false,
		accessibility: false,
		arrows: false,
		// adaptiveHeight: true,
		easing: 'easeInOutQuart',
		prevArrow: '<div class="slick-prev  slick-arrow  icon-arrow-left3"></div>',
		nextArrow: '<div class="slick-next  slick-arrow  icon-arrow-right3"></div>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					easing: 'easeOutCubic',
				}
			},
		]
	});


	$('.js-slider-home-text').slick({
		infinite: true,
		dots: true,
		// fade: true,
		touchMove: false,
		draggable: false,
		accessibility: false,
		adaptiveHeight: true,
		asNavFor: '.js-slider-home',
		easing: 'easeInOutQuart',
		prevArrow: '<div class="slick-prev  slick-arrow  icon-arrow-left2"></div>',
		nextArrow: '<div class="slick-next  slick-arrow  icon-arrow-right2"></div>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					easing: 'easeOutCubic',
				}
			},
		]
	});

/* ^Fin - Slider Home
-----------------------------------------------------------------------------*/






/* ^Slider recetas
-----------------------------------------------------------------------------*/

	$('.js-slider-recetas').slick({
		infinite: true,
		dots: false,
		// fade: true,
		arrows: true,
		// adaptiveHeight: true,
		asNavFor: '.js-slider-recetas-text',
		easing: 'easeInOutQuart',
		prevArrow: '<div class="slick-prev  slick-arrow  icon-circle-left2"></div>',
		nextArrow: '<div class="slick-next  slick-arrow  icon-circle-right2"></div>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					easing: 'easeOutCubic',
				}
			},
		]
	});


	$('.js-slider-recetas-text').slick({
		infinite: true,
		dots: false,
		arrows: false,
		// fade: true,
		touchMove: false,
		draggable: false,
		accessibility: false,
		adaptiveHeight: true,
		easing: 'easeInOutQuart',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					easing: 'easeOutCubic',
				}
			},
		]
	});

/* ^Fin - Slider recetas
-----------------------------------------------------------------------------*/





/* ^Slider Producto
-----------------------------------------------------------------------------*/

	$('.js-slider-producto').slick({
		infinite: true,
		dots: false,
		// fade: true,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 5000,
		// adaptiveHeight: true,
		easing: 'easeInOutQuart',
		prevArrow: '<div class="slick-prev  slick-arrow  icon-circle-left2"></div>',
		nextArrow: '<div class="slick-next  slick-arrow  icon-circle-right2"></div>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					easing: 'easeOutCubic',
				}
			},
		]
	});

/* ^Fin - Slider Producto
-----------------------------------------------------------------------------*/
