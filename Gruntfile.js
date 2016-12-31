module.exports = (grunt) => {
  grunt.initConfig({
    deployPath: '.deploy/',
    assetsPath: '<%= env %>/<%= gitinfo.SHA %>/assets/',
    localBuildPath: 'dist/',
    env: process.env.NODE_ENV,
    pkg: {
      name: 'react-redux-example',
    },
    timestamp: Date.now().toString(),
  });

  grunt.loadTasks('./config/grunt/tasks');

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-webpack');
};
