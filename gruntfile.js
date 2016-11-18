module.exports = function(grunt) {

    grunt.initConfig({

        // task name
        //    options
        //    targetname
        //        options
        //    targetname
        //        options

        jshint: {
            options: {
              jshintrc: '.jshintrc'
            },
            all: {
              files: {
                src:[
                  'src/**/*.js',
                  'test/**/*.js'
                ]
              }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

}
