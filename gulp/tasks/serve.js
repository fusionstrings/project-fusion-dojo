import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from '../paths';

const reload = browserSync.reload;

// Watch files for changes & reload
gulp.task('serve', () => {
  browserSync({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'PF',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    //server: ['.tmp', 'app']
    //proxy: "localhost:8000",
    server: {
      baseDir: [paths.tmp, paths.root],
      routes: paths.serveAltPaths
    }
  });
  gulp.watch(`${paths.root}**/*.*`, [reload]);
});