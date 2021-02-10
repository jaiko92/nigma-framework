/*----------------------------------------------------------------------------*
	$FONTS
	Tareas para convertir fuentes ttf a woff y woff2
*----------------------------------------------------------------------------*/

// Plugins base
var gulp          = require('gulp'),
	config        = require('../config'),
	plumber       = require('gulp-plumber'),
	collate  	  = require('gulp-collate'),
	deleted  	  = require('gulp-deleted'),
	changed  	  = require('gulp-changed'),
	sourcemaps 	  = require('gulp-sourcemaps'),
	notify        = require('gulp-notify');

// Plugins para fonts
var ttf2woff      = require('gulp-ttf2woff');
var ttf2woff2     = require('gulp-ttf2woff2');


gulp.task('fonts', ['font-woff']);


gulp.task('font-woff', ['font-woff2'], function(){

	return gulp.src( config.paths.font.src  )

		.pipe( plumber() )

		.pipe( ttf2woff() )

		.pipe( collate( config.src + '/fonts' ) )
		.pipe( deleted(
			config.paths.font.dist,
			[
				'*.woff',
				'!iconfont.woff'
			]
		))
		.pipe( changed( config.paths.font.dist ) )

		.pipe( gulp.dest( config.paths.font.dist ) )

		.pipe( notify('Fuente convertida: <%= file.relative %>') )

});



gulp.task('font-woff2', function(){

	return gulp.src( config.paths.font.src )

		.pipe( plumber() )

		.pipe( ttf2woff2() )

		.pipe( collate( config.src + '/fonts' ) )
		.pipe( deleted(
			config.paths.font.dist,
			[
				'*.woff2',
				'!iconfont.woff2'
			]
		))
		.pipe( changed( config.paths.font.dist ) )

		.pipe(gulp.dest( config.paths.font.dist ))

		.pipe( notify('Fuente convertida: <%= file.relative %>') )

});
