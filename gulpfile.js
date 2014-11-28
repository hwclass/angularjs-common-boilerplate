'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var express = require('express'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Set up an express server (not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./app'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
  res.sendfile('index.html', { root: 'app' });
});

// Dev task
gulp.task('dev', ['build'], function() { });

// JSHint task
gulp.task('lint', function() {
  gulp.src('app/js/pages/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Browserify task
gulp.task('build', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out)
  gulp.src(['app/src/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: false
  }))
  // Bundle to a single file
  .pipe(concat('build.js'))
  // Output it to our dist folder
  .pipe(gulp.dest('app/src'));
});

gulp.task('watch', ['lint'], function() {
  gulp.watch('app/js/**/*.js', ['build']);
  server.listen(serverport);
  // Start live reload
  refresh.listen(livereloadport);
});

gulp.task('default', ['dev', 'watch']);