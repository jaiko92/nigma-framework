/*----------------------------------------------------------------------------*
	$POPUPS.JS
*----------------------------------------------------------------------------*/



/* ^popUp Global
-----------------------------------------------------------------------------*/

	// Cerrar popUp
	$('.js-close-popup').on('click', function(){
		$.magnificPopup.close();
	});

	// Antes de abrir el popUp
	function beforeOpenPopup(){

		$('body').addClass('c-popup-open');


		// Agregar ancho de scroll al header fixed
			function mediaQueryHeader(mediaquery) {

				if (mediaquery.matches) {
					$('.js-header').css("width", "calc(100% - 300px - " + scrollbarSize + "px)");
				}

			}

			var min_width_992 = window.matchMedia("(min-width: 992px)");
			mediaQueryHeader(min_width_992);
			min_width_992.addListener(mediaQueryHeader);
		// Fin - Agregar ancho de scroll al header fixed

	}

	// Al cerrar el popUp
	function closePopup(){

		$('body').removeClass('c-popup-open');

		// Eliminar ancho de scroll al header fixed
			function mediaQueryHeader2(mediaquery) {

				if (mediaquery.matches) {
					$('.js-header').css("width", "calc(100% - 300px)");
				}

			}

			var min_width_992_2 = window.matchMedia("(min-width: 992px)");
			mediaQueryHeader2(min_width_992_2);
			min_width_992_2.addListener(mediaQueryHeader2);
		// Fin - Eliminar ancho de scroll al header fixed

	}

/* ^Fin - popUp Global
-----------------------------------------------------------------------------*/





/* ^Abrir popUps
-----------------------------------------------------------------------------*/

	$('.js-open-popup-newsletter').on('click', function(){
		popup_newsletter();
	});

	// $('.js-open-popup-newsletter').trigger('click');

/* ^Fin - Abrir popUps
-----------------------------------------------------------------------------*/





/* ^popUp Newsletter
-----------------------------------------------------------------------------*/

	function popup_newsletter(){

		$.magnificPopup.open({

			items: {
				src: '#newsletter',
				type:'inline'
			},
			removalDelay: 500,
			showCloseBtn: false,
			overflowY: 'auto',

			// Clase para agregar animación al popUp
			mainClass: 'mfp-zoom-out  mfp-popUp',

			callbacks: {

				beforeOpen: function(){

					beforeOpenPopup();

					// Ocultar notificacion antes de abrir popup
					$('.js-notificacion-newsletter').css('display', 'none');

				},
				open: function(){
				},

				beforeClose: function(){
				},
				close: function(){

					closePopup();

				}

			}
			// Fin - callbacks

		});

	}



/* ^Fin - popUp Newsletter
-----------------------------------------------------------------------------*/
