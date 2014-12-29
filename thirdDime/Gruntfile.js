module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: [ 'static/build', '.tmp'],
		gitreset: {
		        task: {
		            options: {
		                mode: 'hard',
		                commit: 'HEAD'
		            },
		            files: {
		            	src: 'templates/index.html'
		            }
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
    grunt.loadNpmTasks('grunt-git');
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
	  'usemin'
	]);

	grunt.registerTask('cleanBuild', ['clean', ]);
};
