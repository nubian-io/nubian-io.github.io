const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('clean', () => {
    return del([
        'css/styles.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles']));