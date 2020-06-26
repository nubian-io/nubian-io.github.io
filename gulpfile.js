'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-sourcemaps'),
    watch = require('gulp-watch');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});



function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
