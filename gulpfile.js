var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
    return gulp.src('./sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {
    
    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/main.sass", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);