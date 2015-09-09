module.exports = function (grunt) {
    "use strict";

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-release');
    require("load-grunt-tasks")(grunt);


    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            dist: ["dist"]
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src',
                        dest: 'dist',
                        src: [
                            '**'

                        ]
                    }
                ]
            }
        }
    });

    grunt.registerTask("default", [
        "clean",
        "copy"
    ]);
};