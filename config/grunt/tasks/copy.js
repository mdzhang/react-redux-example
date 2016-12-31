'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    // Copy assets to remote server assets path
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: '<%= localBuildPath %><%= env %>',
            src: ['**/*'],
            dest: '<%= deployPath %><%= assetsPath %>',
          },
        ],
      },
    },
  });
};
