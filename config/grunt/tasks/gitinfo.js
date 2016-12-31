'use strict';

module.exports = (grunt) => {
  grunt.config.merge({
    gitinfo: {
      commands: {
        currentUser: ['config', '--global', 'user.name'],
        SHA: ['rev-parse', 'HEAD'],
        shortSHA: ['rev-parse', '--short', 'HEAD'],
      },
    },
  });
};
