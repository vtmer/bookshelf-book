module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        srcDir: './',

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '<%= srcDir %>'
                }
            }
        },

        watch: {
            pages: {
                files: ['<%= srcDir %>/**/*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            assets: {
                files: ['<%= srcDir %>/**/*.{css,js}'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);
};
