import gulp from 'gulp';
import babel from 'gulp-babel';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
//import paths from '../paths';

gulp.task('scripts', ['scripts:global', 'copy:scripts'], () => {
    return gulp.src(['!app/scripts/dojo-config.js', 'app/scripts/**/*.js'])
    // .pipe(babel({
    //         presets: ['es2015', 'react'],			
    //         plugins: ["transform-es2015-modules-amd"]
    // }))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['es2015', 'react'],			
        plugins: ["transform-es2015-modules-amd"]
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scripts'))
    //.pipe($.concat('main.min.js'))
    .pipe($.uglify({preserveComments: 'some'}))
    // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
    // .pipe($.uglify({preserveComments: 'some'}))
    // // Output files
    // .pipe($.size({title: 'scripts'}))
    // .pipe($.sourcemaps.write(".")) // this only works if the sourceMap option is true
    // .pipe(gulp.dest('.tmp/scripts'));
    
});
gulp.task('scripts:global', () => {
    return gulp.src(['app/scripts/dojo-config.js'])
    .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['es2015']
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scripts'))
    //.pipe($.concat('main.min.js'))
    .pipe($.uglify({preserveComments: 'some'}))
    // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
});