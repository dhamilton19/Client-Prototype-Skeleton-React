'use strict';

var gulp = require('gulp');

gulp.paths = {
    src: 'src',
    tmp: '.tmp'
};

gulp.port = '3000';

require('require-dir')('./gulp');
