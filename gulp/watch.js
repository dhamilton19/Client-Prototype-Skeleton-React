'use strict';

var path = require('path');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var paths = gulp.paths;

gulp.task('watch', ['watch:init'], function () {

    gulp.watch(path.join(paths.src, '/**/*.css'), function(){
        runSequence('styles', 'reload:browser');
    });

    gulp.watch(path.join(paths.src, '/**/*.html'), function () {
        runSequence('copy', 'reload:browser');
    });

});

gulp.task('watch:init', function () {
    runSequence('clean', 'copy', 'styles', 'scripts');
});

gulp.task('reload:browser', function () {
    browserSync.reload();
});