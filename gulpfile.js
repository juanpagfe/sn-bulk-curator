// ////////////////////////////////////////////////
//
// EDIT CONFIG OBJECT BELOW !!!
// 
// jsConcatFiles => list of javascript files (in order) to concatenate
// buildFilesFoldersRemove => list of files to remove when running final build
// // //////////////////////////////////////////////

var config = {
    scriptFiles: [
        './public/src/app.js',
        './public/src/app.config.js',
        './public/src/**/*.js',
        '!./public/src/app.min.js'
    ],
    styleFiles: [
        './public/assets/css/style.css'
    ]
};


// ////////////////////////////////////////////////
// Required taskes
// gulp build
// bulp build:serve
// // /////////////////////////////////////////////

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');
    minifyCSS = require('gulp-csso');


// ////////////////////////////////////////////////
// Log Errors
// // /////////////////////////////////////////////

function errorlog(err){
    console.error(err);
    this.emit('end');
}


// ////////////////////////////////////////////////
// Scripts Tasks
// ///////////////////////////////////////////////

gulp.task('scripts', function() {
  return gulp.src(config.scriptFiles)
        .pipe(concat('temp-back.js'))
        .pipe(uglify())
        .on('error', errorlog)
        .pipe(rename('app.min.js'))     
    .pipe(gulp.dest('./public/src/'));
});

// ////////////////////////////////////////////////
// Style Tasks
// ///////////////////////////////////////////////

gulp.task('style', function() {
  return gulp.src(config.styleFiles)
        .pipe(concat('temp-back.css'))
        .pipe(minifyCSS())
        .on('error', errorlog)
        .pipe(rename('style.min.css'))     
    .pipe(gulp.dest('./public/assets/css/'));
});

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////
gulp.task ('watch', function(){
    gulp.watch('./gulpfile.js', ['scripts','style']);
    gulp.watch('public/assets/**/*.css',['style']);
    gulp.watch('public/src/**/*.js', ['scripts']);
});


gulp.task('default', ['scripts', 'style', 'watch']);