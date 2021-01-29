const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
// const svgstore = require('gulp-svgstore')
// const svgmin = require('gulp-svgmin')
// const rename = require("gulp-rename")
// const package = require('../../package.json')
// const svgSymbols = require('gulp-svg-symbols')

function compile () {
  return src(['./src/winning-components/*.scss', './src/*.scss'])
    .pipe(sass.sync())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

exports.build = series(compile)
