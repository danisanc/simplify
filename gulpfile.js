'use strict'

const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require("gulp-rename")

sass.compiler = require('node-sass')
 
function sassFunc() {
    return src('./scss/simplify.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dest/'))
}

function watchSass() {
    watch('./scss/**/*.scss', sassFunc)
}

function buildFunc() {
    return src('./scss/simplify.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest('dest/'))
}

exports.sass = sassFunc
exports.build = buildFunc
exports.watchSass = watchSass