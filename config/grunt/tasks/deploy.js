'use strict';

module.exports = (grunt) => {
  grunt.registerTask('deploy', (deployMethod) => {
    const tasks = [
      'clean:build',
      'clean:deploy',
      'gitinfo',
      'webpack',
      'string-replace',
      'copy:assets',
    ];

    if (deployMethod === 'gh_pages') {
      tasks.push('gh-pages');
    } else if (deployMethod === 'aws_s3') {
      tasks.push(deployMethod);
    } else {
      throw new Error(`Invalid deploy method: ${deployMethod}`);
    }

    tasks.push('clean:deploy');

    grunt.task.run(tasks);
  });
};
