'use strict'

const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')
 
function sassFunc() {
    return src('./scss/simplify.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dest/'))
}

function watchSass() {
    watch('./scss/*.scss', sassFunc)
}  

exports.sass = sassFunc
exports.watchSass = watchSass