var webserver = require('gulp-webserver');
var gulp = require('gulp');
var gls = require('gulp-live-server');
var open = require('gulp-open');

const fs = require('fs');
const path = require('path');
const e = require('express');

gulp.task('dev', function(){
    gulp.src('./')
    .pipe(webserver({
        livereload: false,
        open: "/index.html",
        //open: "/test2.html",
        port: 9001,
        directoryListing: true,
        cookie: {
            sameSite: "none",
        }
    }));
});
