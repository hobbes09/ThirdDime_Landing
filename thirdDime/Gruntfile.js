module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: [ 'static/build', '.tmp'],
		copy: {
			build: {
				src: 'templates/index.html',
				dest: '.tmp/index.html'
			},
			cleanBuild: {
				src: '.tmp/index.html',
				dest: 'templates/index.html'
			}
		},
		useminPrepare: {
			html: 'templates/index.html',
            options: {
                root: '.',
                dest: 'static/build'
            }
		},

		usemin: {
			html: ['templates/index.html']
		},
	});

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('build', [
	  'useminPrepare',
	  'concat:generated',
	  'cssmin:generated',
	  'uglify:generated',
	  'copy:build',
	  'usemin'
	]);

	grunt.registerTask('cleanBuild', ['copy:cleanBuild', 'clean']);
};
