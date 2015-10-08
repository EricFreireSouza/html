module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			projeto: {
				expand: true,
				cwd: 'teste',
				src: '**',
				dest: 'dist'
			}
		},
		clean: ['dist'],
		useminPrepare: {
			html: ['dist/**/*.html']
		},
		usemin: {
			html: ['dist/**/*.html']
		},
		uglify: {
			teste: {
				expand: true,
				cwd: 'dist/',
				src: ['**/*.js'],
				dest: 'dist/'
			}
		},
		cssmin: {
			teste: {
				expand: true,
				cwd: 'dist/',
				src: ['**/*.css'],
				dest: 'dist/'
			}
		}
	});
	
	grunt.registerTask('minifica', ['useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('default', ['clean', 'copy', 'minifica']);
	
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-clean');	
	grunt.loadNpmTasks('grunt-contrib-concat');	
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-usemin');	
}