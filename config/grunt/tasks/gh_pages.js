'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    'gh-pages': {
      options: {
        base: '<%= deployPath %>',
      },
      src: ['**/*'],
    },
  });
};
