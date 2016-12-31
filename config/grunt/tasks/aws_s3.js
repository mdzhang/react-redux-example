'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    aws_s3: {
      options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        bucket: process.env.AWS_S3_BUCKET,
      },
      dist: {
        files: [
          // Upload webpack bundle to remote server assets path
          // and index.html to remote server root path
          {
            expand: true,
            cwd: '<%= deployPath %>',
            src: ['**/*'],
            dest: '/',
          },
        ],
      },
    },
  });
};
