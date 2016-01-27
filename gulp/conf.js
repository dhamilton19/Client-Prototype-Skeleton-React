'use strict';

var $ = require('gulp-load-plugins')();

exports.wiredep = {
  directory: 'bower_components'
};

exports.errorHandler = function(title) {
  return function(err) {
    $.util.log($.util.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
