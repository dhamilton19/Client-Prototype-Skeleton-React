'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('scripts', function () {
    var bundler = browserify({
        entries: ['./src/app.jsx'],
        extensions: ['js', '.jsx']
    });

    bundler = watchify(bundler);
    bundler.on('update', bundle);
    bundler.on('log', $.util.log);

    bundler.transform(babelify, {
        presets: ['es2015', 'react']
    });

    function bundle() {
        return bundler.bundle()
            .on('error', $.util.log.bind($.util, 'Browserify Error'))
            .on('end', function(){
                browserSync.reload();
            })
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe($.sourcemaps.init({loadMaps: true}))
            .pipe($.sourcemaps.write('./'))
            .pipe(gulp.dest(paths.tmp + '/serve/'))
            .pipe($.size());
    }

    return bundle();
});