'use strict';

var path = require('path');

var gulp = require('gulp');

var paths = gulp.paths;

var runSequence = require('run-sequence');

var browserSync = require('browser-sync');

gulp.task('watch', ['watch:init'], function () {

    gulp.watch(path.join(paths.src, '/**/*.css'), function(event){
        runSequence('styles', 'reload:browser');
    });

    gulp.watch(path.join(paths.src, '/**/*.html'), function (event) {
        runSequence('clean', 'copy', 'reload:browser');
    });

});

gulp.task('watch:init', function () {
    runSequence('clean', 'copy', 'styles', 'scripts');
});

gulp.task('reload:browser', function () {
    browserSync.reload();
});