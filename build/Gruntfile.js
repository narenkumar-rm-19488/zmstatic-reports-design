const sass = require("sass");

module.exports = function (grunt) {
  //Plugins
  grunt.loadNpmTasks("grunt-contrib-handlebars"); //npm install grunt-contrib-handlebars --save-dev
  grunt.loadNpmTasks("grunt-include-replace"); //npm install grunt-include-replace --save-dev
  grunt.loadNpmTasks("grunt-sass"); //npm install grunt-include-replace --save-dev
  grunt.loadNpmTasks("grunt-contrib-watch"); //npm install grunt-contrib-watch --save-dev
  grunt.loadNpmTasks("grunt-contrib-connect"); //npm install grunt-contrib-watch --save-dev

  // Project configuration.
  grunt.initConfig({
    // Project metadata, used by the <banner> directive.

    meta: {},
    //Handlebars
    handlebars: {
      compile: {
        options: {
          processName: function (filePath) {
            // console.log(filePath);
            return filePath.replace(/\//, "/").replace("../src/hbs/", "");
          },
          namespace: "Handlebars.templates"
        },
        src: "../src/hbs/*.hbs",
        dest: "../src/js/hbs_output.js"
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: [{
          src: "**/*.scss",
          expand: true,
          dest: "../src/css",
          ext: ".css",
          cwd: "../src/scss"
        }]
      }
    },
    connect: {
      server: {
        options: {
          hostname: "0.0.0.0",
          port: 9000,
          base: "../",
          livereload: true
        }
      }
    },

    watch: {
      handlebars: {
        files: ["../src/hbs/*.hbs"],
        tasks: ["handlebars:compile"],
        options: {
          livereload: true
        }
      },
      js: {
        files: ["../src/data/*.js"],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ["../src/scss/**/*.scss"],
        tasks: ["sass"],
        options: {
          livereload: true
        }
      },
      html: {
        files: ["../src/html/**/*.html"],
        options: {
          livereload: true
        }
      }
    }
  });

  // Default task.
  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
  grunt.registerTask("default", [
    "handlebars",
    "sass",
    "connect",
    "watch"
  ]);
  grunt.registerTask("zmdev", ["handlebars", "sass"]);
};