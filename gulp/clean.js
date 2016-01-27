'use strict';

var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('clean', function(){
    return gulp.src(path.join(paths.tmp, '/serve/'), {read: false})
        .pipe($.clean());
});