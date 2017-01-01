/* eslint-disable */
'use strict';
const firebase = require('firebase-tools');

module.exports = (grunt) => {
  grunt.config.merge({
    firebase: {
      options: {
        deployPath: '<%= deployPath %>',
      },
    },
  });

  grunt.registerTask('firebase', function() {
    const done = this.async();
    const options = this.options();

    firebase
      .deploy({
        project: process.env.FIREBASE_PROJECT,
        token: process.env.FIREBASE_TOKEN,
        cwd: options.deployPath
      })
      .then((r) => {
        grunt.log.oklns('Firebase deploy successful');
        done();
      })
      .catch((err) => {
        grunt.log.errorlns('Firebase error: ' + err);
      })
  });
};
