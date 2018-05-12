const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require ('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(concat('theme.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './public'
      },
    })
});


gulp.task('watch', ['browserSync', 'sass', 'js'], function (){
    gulp.watch('src/sass/**/*.scss', ['sass'], browserSync.reload);
    gulp.watch('src/js/**/*.js', ['js'], browserSync.reload); 
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('public/*.html', browserSync.reload); 
});