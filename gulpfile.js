var gulp = require('gulp'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    less = require('gulp-less');

gulp.task('less', function () {
    gulp.src(['web/bundles/*/less/*.less'])
        .pipe(less({ compress: true }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('web/assets/css/'))
})

gulp.task('clean', function () {
    return gulp.src(['web/assets/css/*'])
        .pipe(clean());
});

gulp.task('watch', function () {
    // Endless stream mode 
    return watch('web/bundles/*/less/*.less', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('build', function () {
    gulp.start('less');
});

gulp.task('default', ['clean', 'build']);