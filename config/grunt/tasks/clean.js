'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    // Clean out build and deploy directories
    clean: {
      build: {
        src: '<%= localBuildPath %>',
      },
      deploy: {
        src: '<%= deployPath %>',
      },
    },
  });
};
