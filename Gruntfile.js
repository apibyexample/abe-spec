module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            json: {
                files: {
                    src: [
                        '**/*.json',
                        '!node_modules/**'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', [
        'jshint'
    ]);
};
