let gulp = require('gulp'); /* Tu jest fajny opis funkcji require >> https://blog.gutek.pl/2016/03/14/co-jest-requirejs/ */
let sass = require('gulp-sass');

/* Wykonujemy metodę task obiektu gulp; sass - to nazwa do wywołania naszego task/nire yto samo cozmienna sass powyżej */
/* Które pliki będą źródłowe dla task który będzie he przetwarzał; ** - oznaczają dowolną ilość podkatalogów; *.scss - wszystkie pliki z rozszerzeniem scss */
/* pipe - polecenie task z wywołanie m metody sass zadeklarowanej na pocz. - druga linijka*/
/* Gdzie ma być wrzucony plik wynikowy css przetworzony */

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('app/css'));
});

/* Gdy chcesz utworzyć plik css w linii komend wpisujesz gulp sass - sass to nazwa użyta powyżej w gulp.task by wywołać metodę task - możemy użyć dowolnej nazwy */

/*Ale zamiast tego zrobimy watch by się samo kompilowało */

/* Śledzi zmiany w plikach i podkatalogach oraz uruchamia nazwany przez nas task czyli watch */
gulp.task('watch', () => {
   gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
});

/* Teraz w linii komend będąc w danym katalogu można uruchomić śledzienie zmian wpisując >> gulp watch */