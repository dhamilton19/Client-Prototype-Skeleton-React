'use strict';

var gulp = require('gulp');
var path = require('path');
var paths = gulp.paths;

gulp.task('copy', function () {
    return gulp
        .src(path.join(paths.src, '/index.html'))
        .pipe(gulp.dest(paths.tmp + '/serve/'))
});