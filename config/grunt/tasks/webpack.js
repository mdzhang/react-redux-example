'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    webpack: {
      dist: require('../../../webpack.config.js'),
    },
  });
};
