/*----------------------------------------------------------------------------*
	$MENUS.js
*----------------------------------------------------------------------------*/


/*	^Detectar ancho de scroll
-------------------------------------------------------------*/

	var scrollDiv = document.createElement("div");
	scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';

	document.body.appendChild(scrollDiv);

	scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	document.body.removeChild(scrollDiv);


/*	^Fin - Detectar ancho de scroll
-------------------------------------------------------------*/





/* ^reducir menu al hacer scroll
-----------------------------------------------------------------------------*/

	/*
	$(window).scroll(function(){

		var scrollTop = $(this).scrollTop();

		if(scrollTop > 150){
			$('.header__block1').addClass('header__block1--scroll');
			$('.header__block2').addClass('header__block2--scroll');
			// $('.topBar').addClass('topBar--scroll');
			// $('.main-logo').addClass('main-logo--scroll');
		} else {
			$('.header__block1').removeClass('header__block1--scroll');
			$('.header__block2').removeClass('header__block2--scroll');
			// $('.topBar').removeClass('topBar--scroll');
			// $('.main-logo').removeClass('main-logo--scroll');
		}
	});
	*/

/* ^Fin - reducir menu al hacer scroll
-----------------------------------------------------------------------------*/





/* ^Abrir menu lateral en moviles
-----------------------------------------------------------------------------*/

	// Abrir
	/*
	$('.js-open-menu').on('click', function(){

		$('html').css({
			'overflow':'hidden',
			'margin-right': scrollbarSize
		});

		$('header').css('padding-right',scrollbarSize);

		$('.js-menu-mobile').addClass('is-visible');

		$('.js-menu-mobile-overlay').fadeIn(200);
	});


	// $('.js-open-menu').trigger('click');

	// Cerrar
	$('.js-menu-mobile-close, .js-menu-mobile-overlay').on('click', function(){

		$('html').css({
			'overflow':'',
			'margin-right': ''
		});

		$('header').css('padding-right','');

		$('.js-menu-mobile').removeClass('is-visible');

		$('.js-menu-mobile-overlay').fadeOut(200);
	});


	// Abrir submenu
	$('.js-open-submenu').on('click', function(e){
		e.preventDefault();

		$(this).next('.js-submenu').slideToggle(400);
	});
	*/

/* ^Fin - Abrir menu lateral en moviles
-----------------------------------------------------------------------------*/





/* ^Submenu de categorias
-----------------------------------------------------------------------------*/

	// Evitar que sea clickeable ancla de menú desplegable
	/*
	$('.c-nav-4__submenu').prev('a').on('click', function(e) {
		e.preventDefault();
	})

	var li;

	$('.js-nav-4 > li').hoverIntent({

		sensitivity: 15,

		over: function(){

			li = $(this);

			li.children('.c-nav-4__submenu').css('display', 'block');

			setTimeout(function() {
				li.children('.c-nav-4__submenu').addClass('c-nav-4__submenu--hover');
			}, 30);


		},
		out:function(){

			li2 = $(this);

			li2.children('.c-nav-4__submenu').removeClass('c-nav-4__submenu--hover');

			setTimeout(function() {
				li2.children('.c-nav-4__submenu').css('display', 'none');
			}, 400);

		}
	});
	*/

/* ^Fin - Submenu de categorias
-----------------------------------------------------------------------------*/





/* ^Fixed al hacer scroll
-----------------------------------------------------------------------------*/

	/*
	var stickWidth = 991;
	var win = $(window);
	var menu = $(".js-static-menu");
	var options = {
		offset_top: 50,
		sticky_class: 'c-block-8--fixed'
	};



	if (win.width() > stickWidth) {
		menu.stick_in_parent(options)
		.on("sticky_kit:stick", function(e) {
			$('.js-static-menu').addClass('c-block-8--fixed-2');
		})
		.on("sticky_kit:unstick", function(e) {
			$('.js-static-menu').removeClass('c-block-8--fixed-2');
		});
	}

	win.resize(function () {

		if (win.width() > stickWidth) {
			menu.stick_in_parent(options)
			.on("sticky_kit:stick", function(e) {
				$('.js-static-menu').addClass('c-block-8--fixed-2');
			})
			.on("sticky_kit:unstick", function(e) {
				$('.js-static-menu').removeClass('c-block-8--fixed-2');
			});
		} else {
		    menu.trigger("sticky_kit:detach");
		}

	});
	*/


/* ^Fin - Fixed al hacer scroll
-----------------------------------------------------------------------------*/
