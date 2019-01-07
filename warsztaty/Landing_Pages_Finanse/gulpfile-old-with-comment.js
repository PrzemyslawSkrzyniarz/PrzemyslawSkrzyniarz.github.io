let gulp = require('gulp'); /* Tu jest fajny opis funkcji require >> https://www.nafrontendzie.pl/absolutne-podstawy-requirejs */
let sass = require('gulp-sass');
// Tę poniższą linijkę kodu dodałem by móc dokonywać minifikacji plików CSS
let cleanCSS = require('gulp-clean-css'); /* Tu jest opisane to oprócz pliku z kursu pt: "4.2.materialy-sass-gulp.pdf" >> https://medium.freecodecamp.org/how-to-minify-your-css-with-gulp-6ff3f4a896b5 */

// OPIS DO LINIJEK PONIŻEJ
/* Wykonujemy metodę task obiektu gulp; sass - to nazwa do wywołania naszego task/nie to samo co zmienna sass powyżej */
/* Które pliki będą źródłowe dla task który będzie je przetwarzał; ** - oznaczają dowolną ilość podkatalogów; *.scss - wszystkie pliki z rozszerzeniem .scss */
/* pipe - polecenie task z wywołanie metody sass zadeklarowanej przez nas na początku - druga linijka */
/* Ostatnia metoda dest wskazuje gdzie ma być wrzucony plik wynikowy css przetworzony */

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('app/css'));
});
/* Gdy chcesz utworzyć plik css w linii komend wpisujesz gulp sass - sass to nazwa użyta powyżej w gulp.task by wywołać metodę task - w tym skrypcie możemy użyć/zapisać dowolnej nazwy by potem jej uzywać zamiast sass we wspomnianej komendzie gulp sass */

/* Poniżej dodałem >> By zamiast za każdym razem gdy dokonamy modyfikacji w plikach .sass wpisywać gulp sass - metoda watch śledzi zmiany w plikach sass i podkatalogach - uruchamia się nazwany przez nas task czyli watch */

gulp.task('watch', () => {
   gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
});
/* Teraz w linii komend będąc w danym katalogu można uruchomić śledzienie zmian wpisując >> gulp watch */
/* A jak chcemy zakończyć pracę to wystarczy nacisnąć CTRL+C i wybrać T by potwierdzić zamknięcie w trybie wsadowym lub zamkając konsolę bez wychodzenia ze skryptu */

// Te linijki kodu dodałem by móc dokonywać minifikacji plików CSS
gulp.task('minify-css', () => {
    // Folder with files to minify
    return gulp.src('app/css/**/*.css')
        //The method pipe() allow you to chain multiple tasks together 
        //I execute the task to minify the files
        .pipe(cleanCSS())
        //I define the destination of the minified files with the method dest
        .pipe(gulp.dest('app/minified-css'));
});
/* Teraz w linii komend będąc w danym katalogu można uruchomić minifikację pliku CSS wpisując >> gulp minify-css */