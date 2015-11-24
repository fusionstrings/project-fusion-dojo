import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import paths from '../paths';
const $ = gulpLoadPlugins();

// Copy all files at the root level (app)
gulp.task('copy:scripts', () => {
  return gulp.src([
	  'node_modules/babel-polyfill/dist/polyfill.js'
  ], {
    dot: true
  }).pipe(gulp.dest('.tmp/scripts/babel-polyfill'))
    .pipe($.size({title: 'copy'}));
});