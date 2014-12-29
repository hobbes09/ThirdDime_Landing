module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

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
	});

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
