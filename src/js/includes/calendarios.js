/*----------------------------------------------------------------------------*
	$CALENDARIOS.js
*----------------------------------------------------------------------------*/


/* ^Calendario Home
-----------------------------------------------------------------------------*/

$('#calendarHome').jalendar({
	type: 'selector',
	color: 'rgba(255,201,107,.8)',
	color2: 'rgba(255,201,107,0)',
	lang: 'ES',
	weekColor: '#fff',
	// todayColor: '#fff',
	dateType: 'yyyy-mm-dd',
	done: function() {

		var fecha = $('#calendarHome input.data1').val();

		var idioma = $('#calendarHome').attr('data-idioma');

		// alert(fecha);


		js_eventos(fecha, idioma);

	}
});

/* ^Fin - Calendario Home
-----------------------------------------------------------------------------*/





/* ^Calendario Page
-----------------------------------------------------------------------------*/

$('#calendarPage').jalendar({
	type: 'selector',
	color: '#f0f0f0',
	color2: '#dbd9d9',
	// color: '#ffab5e',
	// color2: '#e74853',
	// color2: 'rgba(255,201,107,0)',
	lang: 'ES',
	titleColor: '#2f3336',
	weekColor: '#e74853',
	todayColor: '#d21f07',
	dateType: 'yyyy-mm-dd',
	done: function() {

		var fecha = $('#calendarPage input.data1').val();

		var idioma = $('#calendarPage').attr('data-idioma');
		var pagina = $('#calendarPage').attr('data-slug');

		// alert(fecha);

		js_eventos_page(fecha, idioma, pagina);

	}
});

/* ^Fin - Calendario Page
-----------------------------------------------------------------------------*/





/* ^Calendario formulario
-----------------------------------------------------------------------------*/

	// Comprobar si esta definido el calendario para no mostrar error
	if( typeof dhtmlXCalendarObject !== 'undefined' && jQuery.isFunction( dhtmlXCalendarObject ) ) {

		var myCalendar1,
			myCalendar2;

		// Campo Día inicio
		myCalendar1 = new dhtmlXCalendarObject(["calendar_input1"]);
		myCalendar1_2 = new dhtmlXCalendarObject({
			input: "calendar_input1",
			button: "calendar_icon1"
		});
		myCalendar1.hideTime();
		myCalendar1_2.hideTime();


		// Campo Día cierre
		myCalendar2 = new dhtmlXCalendarObject(["calendar_input2"]);
		myCalendar2_2 = new dhtmlXCalendarObject({
			input: "calendar_input2",
			button: "calendar_icon2"
		});
		myCalendar2.hideTime();
		myCalendar2_2.hideTime();

	}



/* ^Fin - Calendario formulario
-----------------------------------------------------------------------------*/
