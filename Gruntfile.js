/**
 * Created by win on 2017/6/5.
 */
module.exports = function(grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //编译sass
    sass: {
      output : {
        options: {
          style: sassStyle
        },
        files: {
          './dist/css/demo1.css': './src/css/demo1.scss'
        }
      }
    },
    //合并
    concat: {
      options: {
        separator: '',
      },
      dist: {
        src: './src/js/demo1.js',
        dest: './dist/js/demo1.js'
      }
    },


    //压缩js
    uglify: {
      compressjs: {
        files: {
          './dist/js/demo1.min.js': ['./dist/js/demo1.js']
        }
      }
    },

    //检查js
    jshint: {
      all: ['./dist/js/demo1.js']
    },

    //实时监控
    watch: {
      scripts: {
        files: './src/js/demo1.js',
        tasks: ['concat', 'jshint', 'uglify']
      },
      sass: {
        files: ['./src/css/demo1.scss'],
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload%>'
        },
        files: [
          'index.html',
          './dist/css/demo1.css',
          './dist/js/demo1.min.js'
        ]
      }

    },
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: 'localhost'
      },
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });


  //grunt concatjs
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('outputcss', ['sass']);
  // grunt.registerTask('concatjs',['concat']);
  grunt.registerTask('compressjs', ['concat', 'jshint', 'uglify']);
  grunt.registerTask('watchit', ['sass', 'concat', 'jshint', 'uglify', 'connect', 'watch']);
  grunt.registerTask('default');

  //grunt命令一步到位
  //编译grunt outputcss
  //合并grunt concatjs
  //监听grunt watchit
};
