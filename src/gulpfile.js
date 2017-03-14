var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var task = require('shell-task');


// Construcción del libro en HTML a partir de los MarkDown
gulp.task('build', function() {
    return gulp.src('')
        .pipe(shell(['sudo gitbook build ../docs ../gh-pages']));
});


// Despliegue del libro en GitHub Pages
var ghpages = require('gh-pages');

gulp.task('deploy-gh-pages', ['build'], function() {
    ghpages.publish('../gh-pages', {
        repo: "https://github.com/ULL-ESIT-PL-1617/estudiar-cookies-y-sessions-en-expressjs-guillermo-eduardo-oscar-sergio.git",
        logger: function(m) {
            console.error(m);
        }
    });
});


// Despliegue del libro en GitBook
gulp.task('deploy-gitbook', function() {
    ghpages.publish('../docs', {
        branch: 'master',
        repo: "https://git.gitbook.com/alu0100892833/estudiar-cookies-y-sessions-en-expressjs.git"
    }, function(err) {
         console.log(err);
    });
});


// Tarea que ejecuta los ejemplos que muestran el funcionamiento de las Cookies
gulp.task('CookieExample', function() {
    return gulp.src('')
        .pipe(shell(['node cookies.js']));
});















//END
