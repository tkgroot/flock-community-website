'use strict';

var browserSync = require("browser-sync").create()
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify')
var gulpCopy = require('gulp-copy');

gulp.task('css', function () {
  return gulp.src('./src/styles/*.css')
    .pipe(autoprefixer({browsers: 'last 2 version'}))
    .pipe(csso())
    .pipe(gulp.dest('./dist/styles/'))
});

gulp.task("css:watch", () => {
  gulp.watch("./src/styles/**/*.css", ["css", browserSync.reload])
})

gulp.task('js', function() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'))
});

gulp.task("js:watch", () => {
  gulp.watch("./src/scripts/**/*.js", ["js", browserSync.reload])
})

gulp.task('html', function() {
  return gulp.src(['./src/index.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task("html:watch", () => {
  gulp.watch("./src/**/*.html", ["html", browserSync.reload])
})

gulp.task('assets', function() {
  return gulp.src(['./src/assets/**/*'])
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task("assets:watch", () => {
  gulp.watch("./src/assets/**/*", ["assets", browserSync.reload])
})

gulp.task('copy-root', function() {
  return gulp.src(['./src/*.*', '!./src/index.html'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
  return del(['dist'])
});

gulp.task("serve", () => {
  browserSync.init({
    open: false,
    notify: true,
    server: {
      baseDir: "./dist"
    }
  })
})

gulp.task('default',
  gulp.series('clean',
    gulp.parallel('html', 'js', 'css', 'assets', 'copy-root')));
