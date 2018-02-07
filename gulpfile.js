const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => gulp.src('src/bomgificate.js').pipe(babel()).pipe(gulp.dest('dist')));
