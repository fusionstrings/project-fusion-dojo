import gulp from 'gulp';
import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
//import paths from '../paths';


gulp.task('rollup', () => {
        return gulp.src('app/scripts/**/*.js')
        .pipe(rollup({
                entry: 'app/scripts/fuse/main.js',
                plugins: [
                        babel({
                                presets: ['es2015-rollup', 'react']
                        })
                ]
        }))
        .pipe(gulp.dest('app/amd-rollup'));
});