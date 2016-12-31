module.exports = (grunt) => {
  grunt.initConfig({
    s3AssetsPath: '/<%= env %>/<%= gitinfo.SHA %>/assets/',
    localBuildPath: 'dist/<%= env %>/',
    env: process.env.NODE_ENV,
    pkg: {
      name: 'react-redux-example',
    },
    timestamp: Date.now().toString(),
  });

  grunt.loadTasks('./config/grunt/tasks');

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-webpack');
};
