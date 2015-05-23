module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  var INPUT_PATH = 'app/index.js';
  var OUTPUT_PATH = './dist/javascripts/codeportfolio.js';

  grunt.registerTask('test', 'karma');
  grunt.registerTask('default', 'concurrent:serve');
  grunt.registerTask('release', ['browserify:release', 'exorcise', 'uglify:release']);

  grunt.initConfig({
    nodemon: {
      serve: {
        script: './bin/www'
      }
    },
    concurrent: {
      serve: {
        tasks: ['browserify:watch', 'nodemon:serve'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    browserify: {
      release: browserifyOptions({
        debug: true
      }),
      watch: browserifyOptions({
        watch: true,
        debug: true
      }),
    },
    exorcise: {
      bundle: {
        files: {
          './dist/javascripts/codeportfolio.map': [OUTPUT_PATH]
        }
      }
    },
    uglify: {
      release: {
        options: {
          sourceMap: true,
          sourceMapIncludeSources: true,
          sourceMapIn: 'dist/javascripts/codeportfolio.map'
        },
        files: {
          'dist/javascripts/codeportfolio.min.js': ['dist/javascripts/codeportfolio.js']
        }
      }
    }
  });

  function browserifyOptions(options) {
    options || (options = {});

    return {
      src: [INPUT_PATH],
      dest: OUTPUT_PATH,
      options: {
        watch: !!options.watch,
        keepAlive: !!options.watch,
        transform: ['babelify', 'envify'],
        browserifyOptions: {
          debug: !!options.debug
        }
      }
    };
  }
};