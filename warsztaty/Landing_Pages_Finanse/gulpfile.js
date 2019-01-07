let gulp = require('gulp'); /* Tu jest fajny opis funkcji require >> https://www.nafrontendzie.pl/absolutne-podstawy-requirejs */
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');



gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});
/* Teraz w linii komend będąc w danym katalogu można uruchomić śledzienie zmian wpisując >> gulp watch */

gulp.task('minify-css', () => {
    // Folder with files to minify
    return gulp.src('app/css/**/*.css')
        //The method pipe() allow you to chain multiple tasks together 
        //I execute the task to minify the files
        .pipe(cleanCSS())
        //I define the destination of the minified files with the method dest
        .pipe(gulp.dest('app/minified-css'));
});