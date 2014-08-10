'use strict';

module.exports = function(grunt) {


  grunt.registerTask('build:dev', function() {
    grunt.task.run([
      'newer:copy:dev',
      'fileblocks:dev',
      'jekyll:dev',
      'optimize:css:dev',
      'optimize:html:dev'
    ]);
  });

  grunt.registerTask('build:full', function() {
    grunt.task.run([
      'newer:copy:full',
      'optimize:css:full',
      'fileblocks:full',
      'jekyll:full',
      'optimize:html:full'
    ]);
  });
  grunt.registerTask('build', 'build:full');

};

