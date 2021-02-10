/*----------------------------------------------------------------------------*
	$ICON-FONTS
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

// Plugins para styles
var consolidate   = require('gulp-consolidate');
var iconfont      = require('gulp-iconfont');
var stylus        = require('gulp-stylus');


gulp.task('icon-fonts',function(){

	return gulp.src( config.paths.iconfont.src )

		// .pipe( plumber() )

		.pipe( iconfont({
			fontName: 'iconfont',
			formats: ['woff', 'woff2'],
			appendCodepoints: true,
			appendUnicode: false,
			normalize: true,
			fontHeight: 1000,
			centerHorizontally: true
		}) )

        .on('glyphs', function (glyphs, options) {
            gulp.src('src/icon-fonts-dev.css')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }))
                .pipe(gulp.dest('src/icon-fonts/glifos'))

            gulp.src('src/icon-fonts.css')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }))
                .pipe(gulp.dest('src/styl/base/elements'))

            gulp.src('src/icon-fonts.html')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName
                }))
                .pipe(gulp.dest('src/icon-fonts/glifos'))
        })

        .pipe(gulp.dest( config.paths.iconfont.dist ))
        .pipe(gulp.dest('src/icon-fonts/glifos'))

		.pipe( notify('Icon Font creado: <%= file.relative %>') )

		.on('end', function(){
			gulp.start('styles')
		})

});
