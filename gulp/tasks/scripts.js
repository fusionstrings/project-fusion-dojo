import gulp from 'gulp';
import babel from 'gulp-babel';
//import paths from '../paths';

gulp.task('scripts', () => {
        return gulp.src('app/scripts/**/*.js')
        .pipe(babel({
                presets: ['es2015', 'react'],			
                plugins: ["transform-es2015-modules-amd"]
        }))
        .pipe(gulp.dest('app/amd'));
});