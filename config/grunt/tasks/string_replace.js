'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    // Replace asset path in index.html to match remote server assets path
    'string-replace': {
      options: {
        replacements: [
          {
            pattern: '/assets/',
            replacement: '<%= assetsPath %>',
          },
        ],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['index.html'],
            dest: '<%= deployPath %>',
          },
          {
            expand: true,
            cwd: 'src/',
            src: ['index.html'],
            dest: '<%= deployPath %><%= assetsPath %>',
          },
        ],
      },
    },
  });
};
