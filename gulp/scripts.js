'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var path = require('path');
var paths = gulp.paths;
var browserSync = require('browser-sync');

gulp.task('scripts', function () {
    var bundler = browserify({
        entries: ['./src/app.jsx'],
        extensions: ['js', '.jsx']
    });

    bundler = watchify(bundler);
    bundler.on('update', bundle);

    bundler.transform(babelify, {
        presets: ['es2015', 'react']
    });

    function bundle() {
        return bundler.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(paths.tmp + '/serve/'))
            .on('end', function(){
                browserSync.reload();
            });
    }

    return bundle();
});