module.exports = function(grunt) {

	grunt.initConfig({
		typescript: {
			src: {
				src: ['test/fixtures/main.ts'],
				dest: 'test/expected/main.js',
				options: {
					target: 'es5',
					basePath: 'test/fixtures',
					sourceMap: true
				}
			}
		},

		'patch-sourcemap': {
			app: {
				src: ['test/expected/main.js.map']
			}
		},

		copy: {
			sourcemap: {
				files: [{
					src: 'test/expected/main.js.map',
					dest: 'test/expected/main.js.map.copy'
				}]
			}
		},

		mochaTest: {
			options: {
				reporter: 'spec',
			},
			src: ['test/**/*.spec.js']
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('test', ['typescript', 'copy', 'patch-sourcemap', 'mochaTest']);
}