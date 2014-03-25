module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-compass')
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.initConfig({
		jshint: {
			options:{
	      eqeqeq: true,
	      eqnull: true,
	      browser: true
			},
			files: {
        src: ['src/js/app/**/*.js']
      }
		}, // jshint
		requirejs: {
	    options: {
		    baseUrl: 'src/js',
		    mainConfigFile: 'src/js/main.js',
		    name: 'vendor/bower_components/almond/almond',
		    include: ['main']
		  },
		  production: {
		    // overwrites the default config above
		    options: {
		      out: 'www/js/main.js'
		    } //options
		  }, //production
		  development: {
		    // overwrites the default config above
		    options: {
		      out: 'www/js/main.js',
		      optimize: 'none' // no minification
		    } //options
		  } //development
		}, //requirejs
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		clean: ["www"], // clean
		copy: {
		  main: {
		    files: [
		      // copy root files
		      {expand: true, flatten: true, src: ['src/*'], dest: 'www/', filter: 'isFile'},

		      // copy img directory
		      {expand: true, cwd: 'src/', src: ['img/**'], dest: 'www/'},

		      // copy css directory
		      {expand: true, cwd: 'src/', src: ['css/*'], dest: 'www/'},

		      // copy angularjs template directory
		      {expand: true, cwd: 'src/', src: ['ng-templates/*'], dest: 'www/'},

		      // copy helper.js
		      {expand: true, cwd: 'src/', src: ['js/helper.js'], dest: 'www/'},

		      // copy requirejs
		      {expand: true, cwd: 'src/', src: ['js/vendor/bower_components/requirejs/require.js'], dest: 'www'},

		    ] //files
		  } //main
		}, //copy
		'gh-pages': {
	    options: {
	      base: 'www',
	      message: grunt.option('m') || 'Auto-generated commit from grunt'
	    },
	    src: ['**']
	  }, // gh-pages
		watch: {
			scripts: {
				files: ['src/js/app/**/*.js'],
			}, //scripts
			sass: {
				files: ['src/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['*.html']
			} //html
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
	grunt.registerTask('preflight', ['jshint','clean','requirejs:production','compass:dev','copy']);
	grunt.registerTask('production', ['jshint','clean','requirejs:production','compass:dev','copy','gh-pages','clean']);
	grunt.registerTask('development', ['clean','requirejs:development','compass:dev','copy']);
} //exports