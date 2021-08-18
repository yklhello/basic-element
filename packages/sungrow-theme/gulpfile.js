const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile () {
  return src(['./src/sungrow-components/*.scss', './src/*.scss'])
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

exports.build = series(compile)
