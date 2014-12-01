'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyHtml = require('gulp-minify-html'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

var express = require('express'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Path to sass

var indexRootForDist = 'dist/';
var cssRootForSite = 'app/style/css/';
var cssRootForDist = 'dist/style/css/';
var sassRootForApp = 'app/style/sass/';
var buildJsForSite = 'app/src/build.js';
var buildJsForDist = 'dist/src';
var indexHtmlForSite = 'app/index.html';
var partialForSite = 'app/src/section/';
var partialForDist = 'dist/src/section';


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

// Reload all Browsers
gulp.task('browser-reload', function () {
  browserSync.reload();
});

// Dev task
gulp.task('dev', ['build'], function() { });

// JSHint task
gulp.task('lint', function() {
  gulp.src('app/src/**/*.js')
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

gulp.task('watch_js', ['lint'], function() {
  gulp.watch('app/src/**/*.js', ['build']);
});

// Get sass files and convert to css
gulp.task('sass_to_css', function(){
  return gulp.src(sassRootForApp + 'main.scss')
    .pipe(sass({sourcemap: true}))
    .pipe(rename('build.css'))
    .pipe(gulp.dest(cssRootForSite));
});

// Minify and copy css file to dist
gulp.task('copy_css_to_dist', function(){
  gulp.src(cssRootForSite + 'build.css')
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest(cssRootForDist))
});

// Uglify and Copy build.js to dist file
gulp.task('copy_buildJs_to_dist', function(){
  gulp.src(buildJsForSite)
    .pipe(uglify({mangle : false}))
    .pipe(gulp.dest(buildJsForDist))
});

// Copy index.html to dist
gulp.task('copy_indexHtml_to_dist', function(){
  gulp.src(indexHtmlForSite)
  .pipe(gulp.dest(indexRootForDist))
});

// Copy test partial to dist
gulp.task('copy_test_partial_to_dist', function(){
  gulp.src(partialForSite + '/test/partial/test.html')
  .pipe(gulp.dest(partialForDist + '/test/partial'))
});

// Watch and Copy all scss fils to dist
gulp.task('watch_css', function(){
  gulp.watch("app/style/sass/**/*.scss", ['sass_to_css', 'copy_css_to_dist']);
});

// All copy work
gulp.task('copy_dist', ['copy_css_to_dist',
                        'copy_buildJs_to_dist',
                        'copy_indexHtml_to_dist',
                        'copy_test_partial_to_dist'], function() {
  console.log('copy done!');
});


// Browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app"
        }
    });
});



gulp.task('default', ['dev', 'browser-sync'], function(){
  gulp.watch("app/style/sass/**/*.scss", ['watch_css']);
  gulp.watch("app/src/**/*.js", ['watch_js']);
});
