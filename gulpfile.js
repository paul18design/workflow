var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});