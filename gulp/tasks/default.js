/*----------------------------------------------------------------------------*
	$DEFAULT
	Ejecutar y vigilar cambios en las tareas para volver a compilar
*----------------------------------------------------------------------------*/

// Plugins base
var gulp        = require('gulp'),
	config      = require('../config');


// Vigilar cambios sobre las tareas
gulp.task('watch', function(){

	gulp.watch( config.paths.tpl.src, ['jade'] );
	gulp.watch( config.paths.tpl.includes, ['jade-includes'] );
	gulp.watch( config.paths.css.all, ['styles'] );
	gulp.watch( config.paths.js.all, ['scripts'] );
	gulp.watch( config.paths.img.all, ['images'] );
	gulp.watch( config.paths.font.src, ['fonts'] );
	gulp.watch( config.paths.iconfont.src, ['icon-fonts'] );

});


// Ejecutar tareas
gulp.task('build', ['jade', 'styles', 'scripts', 'images', 'fonts', 'icon-fonts']);


// Tareas que se ejecutan por defecto al iniciar
gulp.task('default', ['build', 'watch'], function(){

	// Servidor http
	config.plugins.browserSync.init({
		server: config.dist,
		// proxy: 'localhost:8888',
		open: false,
		notify: false,
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
				fn: function (snippet, match) {
				  return snippet + match;
				}
			}
		}

    });

});
