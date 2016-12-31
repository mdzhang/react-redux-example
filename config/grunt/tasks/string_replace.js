'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    // Replace asset path in index.html to match that set when uploading to S3
    'string-replace': {
      options: {
        replacements: [
          {
            pattern: '/assets/bundle.js',
            replacement: '<%= s3AssetsPath %>bundle.js',
          },
        ],
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['index.html'],
            dest: '<%= localBuildPath %>',
          },
        ],
      },
    },
  });
};
