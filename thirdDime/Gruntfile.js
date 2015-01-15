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

		htmlmin: {
		    main: {
		        files: [{
			        expand: true,
			        src: ['templates/*.html', 'static/js/**/*.html', 'static/layouts/**/*.html'],
			        dest: "."
		        }]
		    }
		},

		clean: [ 'static/build', '.tmp', '.htmlminTmp'],
		copy: {
			preusemin:{
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
			prehtmlmin:{
				files: [{
						expand: true,
						src: ['templates/*.html', 'static/js/**/*.html', 'static/layouts/**/*.html'],
						dest: '.htmlminTmp'
					}]
			},
			cleanBuild: {
				files: [{
					src: '.tmp/index.html',
					dest: 'templates/index.html'},
					{
						expand: true,
						cwd: '.htmlminTmp',
						src: '**',
						dest: '.'}]
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

		imagemin: {
		    dynamic: {
		      files: [{
		        expand: true,
		        src: ['static/images/**/*.{png,jpg,gif}'],
		      }]
		    }
		 },
	});

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('validate', ["jshint"]);

    grunt.registerTask('build', [
    	'copy:prehtmlmin',
    	'htmlmin',
	    'useminPrepare',
	    'concat:generated',
	    'cssmin:generated',
	    'uglify:generated',
	    'copy:preusemin',
	    'usemin'
	]);

	grunt.registerTask('cleanBuild', ['copy:cleanBuild', 'clean']);
};
