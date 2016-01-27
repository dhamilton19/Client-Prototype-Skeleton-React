'use strict';

var gulp = require('gulp');

var path = require('path');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('clean', function(){
    return gulp.src(path.join(paths.tmp, '/serve/'), {read: false})
        .pipe($.clean());
});