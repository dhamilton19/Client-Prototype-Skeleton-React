'use strict';

var gulp = require('gulp');

var path = require('path');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src(path.join(paths.src, '/**/*.css'))
        .pipe($.concat('styles.css'))
        .pipe(gulp.dest(paths.tmp + '/serve/'))
        .pipe($.size());
});