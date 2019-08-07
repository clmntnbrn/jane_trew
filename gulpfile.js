var gulp = require('gulp');
// var sass = require('gulp-sass');

// sass.compiler = require('node-sass');

// gulp.task('default', function() {
//   // we want to run "sass css/app.scss app.css --watch"
//   return gulp.src("css/app.scss")
//     .pipe(sass())
//     .pipe(gulp.dest("app.css"))
// });

var browserSync = require('browser-sync').create()

gulp.task("watch", function (){

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default", ["watch"])
