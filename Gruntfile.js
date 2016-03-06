module.exports = function(grunt) {

  // config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {'build/style.css': 'src/*.scss'}
      }
    },
    cssmin: {
      minimize: {
        // cssの先頭に入れる
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {'build/style.min.css': 'build/style.css'}
      }
    },
    watch: {
      files: 'src/*.scss',
      tasks: ['sass', 'cssmin']
    }
  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-csslint');

  // task
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};
