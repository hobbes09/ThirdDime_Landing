module.exports = function (grunt) {
    "use strict";
    
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
		    options: {
		    	jshintrc: true,
		    	reporter: require('jshint-stylish')
		    },
		    files: {
		        src: ['Gruntfile.js','static/js/**/*.js']
		    },
		},

		clean: [ 'static/build', '.tmp'],
		copy: {
			build:{
				files: [
					{
						expand: true,
						cwd: './static/build/static/build',
						src: '*',
						dest: './static/build'
					},
					{
						src: 'templates/index.html',
						dest: '.tmp/index.html'
					},
				],
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

		imagemin: {                          // Task
		    dynamic: {                         // Another target
		      files: [{
		        expand: true,                  // Enable dynamic expansion
		        src: ['static/images/**/*.{png,jpg,gif}'],   // Actual patterns to match
		      }]
		    }
		 }

	});

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('build', [
	  'useminPrepare',
	  'concat:generated',
	  'cssmin:generated',
	  'uglify:generated',
	  'copy:build',
	  'usemin',
	  'imagemin'
	]);

	grunt.registerTask('cleanBuild', ['copy:cleanBuild', 'clean']);
};
