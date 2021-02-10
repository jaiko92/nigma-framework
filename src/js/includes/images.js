
// Recorrer todas las imagenes y usarlas como fondo
$('.js-image-ref').each(function(index) {
	var url_img = $(this).attr('src');
	$(this).prev('.js-image-bg').css('background-image', 'url(' + url_img + ')');
});





/* ^.js-img-svg
	Recorrer todas las imagenes con extensión .svg y agregar el código svg en
	el documento html
-----------------------------------------------------------------------------*/

	$('.js-img-svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {

			// Obtener solo la etiqueta svg
			var $svg = $(data).find('svg');

			// Pasar el ID de la imagen al svg
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}

			// Pasar las clases de la imagen al SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Eliminar las etiquetas no validas http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Reemplazar imagen con svg
			$img.replaceWith($svg);

		}, 'xml');

	});

/* ^Fin - .js-img-svg
-----------------------------------------------------------------------------*/
