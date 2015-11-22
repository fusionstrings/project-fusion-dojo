import gulp from 'gulp';
//import { rollup } from 'rollup';
//import babel from 'rollup-plugin-babel';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
//import paths from '../paths';

gulp.task('rollup', function(){
  gulp.src(['app/scripts/**/*.js', '!app/scripts/fuse/**/*'], {read: false})
    .pipe($.sourcemaps.init())
    .pipe($.rollup({
        // any option supported by rollup can be set here, including sourceMap
        
        entry: 'app/scripts/main.js',        
        sourceMap: true,
        format: 'amd'
        // plugins: [babel({
        //     presets: ['es2015-rollup', 'react']
        // })]
    }))    
    
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scripts'))
    //.pipe($.concat('main.min.js'))
    .pipe($.uglify({preserveComments: 'some'}))
    // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('distro/scripts'))
});

// function bundleGenerate(bundle){
//     console.log('rollup cb');
// }
// 
// gulp.task('rollup', bundleGenerate => {
//     console.log('rolledup');
//     return gulp.src('app/scripts/**/*.js', {read: false})
//     .pipe(rollup({
//         entry: 'app/scripts/fuse-portlet/main.js'
//     }).then(bundle => {
//         // Generate bundle + sourcemap
//         let result = bundle.generate({
//             // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
//             format: 'amd'
//         });
//         
//         fs.writeFileSync( 'bundle.js', result.code );
//         
//         // Alternatively, let Rollup do it for you
//         // (this returns a promise). This is much
//         // easier if you're generating a sourcemap
//         bundle.write({
//             format: 'cjs',
//             dest: '.tmp/bundle.js'
//         });
//     }))
//     // .pipe(gulp.dest('.tmp/scripts'));
// });