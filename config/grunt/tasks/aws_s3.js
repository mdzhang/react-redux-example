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
          // Upload webpack bundle to assets path in S3
          {
            expand: true,
            cwd: '<%= localBuildPath %>',
            src: ['**'],
            dest: '<%= s3AssetsPath %>',
          },
          // Upload index.html to root path in S3
          {
            expand: true,
            cwd: '<%= localBuildPath %>',
            src: ['index.html'],
            dest: '/',
          },
        ],
      },
    },
  });
};
