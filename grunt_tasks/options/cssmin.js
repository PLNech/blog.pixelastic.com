module.exports = {
  full: {
    files: {
      '<%= config.srcBuildFull %>/main.css': [
        '<%= config.bower %>/**/*.css',
        '<%= config.tmp %>/css/*.css'
      ]
    }
  }
};
