'use strict';

var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('styles', function () {
    return gulp.src(path.join(paths.src, '/**/*.css'))
        .pipe($.concat('styles.css'))
        .pipe(gulp.dest(paths.tmp + '/serve/'))
        .pipe($.size());
});