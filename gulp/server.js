'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = gulp.paths;
var port = gulp.port;

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    browserSync.instance = browserSync.init(files, {
        startPath: '/',
        server: {
            baseDir: baseDir
        },
        port: port,
        browser: browser
    });
}

gulp.task('serve', ['watch'], function () {
    browserSyncInit(
        paths.tmp + '/serve',
        [
            paths.tmp + '/serve/**'
        ]);
});