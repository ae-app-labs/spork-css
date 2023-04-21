const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('test/sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({
            content:['test/*.html']
        }))
        .pipe(dest('test/css'))
}

function watchTask() {
    watch(['test/sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)