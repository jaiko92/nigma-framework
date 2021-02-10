/*----------------------------------------------------------------------------*
	$FORMULARIOS
*----------------------------------------------------------------------------*/



/* ^Select
-----------------------------------------------------------------------------*/

	// Todos los select
	$('.js-select').selectize();

/* ^Fin - Select
-----------------------------------------------------------------------------*/





/* ^Newsletter
-----------------------------------------------------------------------------*/

	var form_newsletter = $("#form-newsletter");

	/**
	 *
	 * Validar select
	 * Como se está usando la libreria selectize.js es necesario verificar
	 * el cambio del select para validar el campo
	 *
	 */
	$('.js-select-departamento').change(function(){
		form_newsletter.validate().element(this);
	});

	// Validar campos del formulario Newsletter
	form_newsletter.validate({
		ignore: ".ignore",
		errorClass: 'o-form-error',
		errorPlacement: function(error, element) {
			error.appendTo(element.parents('.c-form-newsletter__campo'));
		},
		rules: {
			newsletter__nombre: "required",
			newsletter__email: {
				required: true,
				email: true
			},
			newsletter__departamento: "required",
			newsletter__politica: "required",
		},
		submitHandler: function(form) {

			// Boton
			var boton_enviar = $('.js-btn-newsletter');

			// Datos formulario
			var datos = form_newsletter.serialize();

			// Action del formulario
			// var action = '/php/usuarios/validar-formu-contacto.php';
			var action_enviar = '/php/newsletter/enviar-newsletter.php';

			// Desabilito el boton enviar para evitar doble envio
			boton_enviar.attr("disabled",true);

			// Ocultar las notificaciones al presionar boton enviar
			$('.js-notificacion-newsletter').slideUp(400);

			// Mostrar cargador
			$('.js-menu-mobile-overlay').css('z-index',5000).fadeIn(200);
			$('.js-loader').css('z-index',5001).fadeIn(400);


			$.post(action_enviar, datos,
				function(data)
					{

						boton_enviar.removeAttr('disabled');

						// console.log(data);

						// Si se envió correctamente
						if(data.match('1') == '1'){

							setTimeout(function(){
								$('.js-notificacion-newsletter').slideDown(400);

								$('.o-form-field').val("");
								$('#check-politica').removeAttr('checked');


								// Ocultar cargador
								$('.js-menu-mobile-overlay').fadeOut(200, function(){
									$(this).css('z-index',100)
								});
								$('.js-loader').fadeOut(400, function(){
									$(this).css('z-index',101)
								});
							},1000);


						}


					}
			);
			// Fin - $.post()


		}
	});

/* ^Fin - Newsletter
-----------------------------------------------------------------------------*/
