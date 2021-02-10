/*----------------------------------------------------------------------------*
	$NAVEGACION-AJAX
*----------------------------------------------------------------------------*/


/* ^Scroll infinito - Productos
-----------------------------------------------------------------------------*/

	$('.js-listado-productos').jscroll({
		nextSelector: 'a.js-listado-productos-siguiente:last',
		autoTrigger: false,
		loadingHtml: '<div class="c-list-4__paginador"><a class="o-btn icon-der js-listado-productos-siguiente" href="productos-listado-ajax.html">Cargando... <img src="/images/loading.gif" alt="Cargando..."></a></div>',
		callback: function(){
			// console.log('cargado');
			$(this).jscroll({
				loadingHtml: '<div class="c-list-4__paginador"><a class="o-btn icon-der js-listado-productos-siguiente" href="productos-listado-ajax.html">Cargando... <img src="/images/loading.gif" alt="Cargando..."></a></div>',
			});
		}
	});

/* ^Fin - Scroll infinito - Productos
-----------------------------------------------------------------------------*/
