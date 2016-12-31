'use strict';

module.exports = (grunt) => {
  grunt.registerTask('deploy', [
    'gitinfo',
    'webpack',
    'string-replace',
    'aws_s3',
  ]);
};
