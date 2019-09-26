var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    run = require('run-sequence'),
    procss = require('gulp-progressive-css'),
    webpack = require('webpack-stream'),
    replace = require('gulp-replace'),
    babel = require('gulp-babel'),
    through = require('through2');
    

// Compile sass
gulp.task('sass', function () {
    return gulp.src(['source/assets/sass/main.scss', 'source/assets/sass/critical.scss'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(replace('@charset "UTF-8";', ''))
        .pipe(autoprefixer(['last 5 versions'], {cascade: true}))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.reload({stream: true}))
});

// Compress css libs
gulp.task('css-libs', function () {
    return gulp.src('source/assets/sass/libs.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/assets/css'));
});

// Build css
gulp.task("build-css", function () {
    run('sass', 'css-libs')
});

//Compress js
gulp.task('scripts', function () {
    return gulp.src('source/assets/js/**/*.js')
        .pipe(webpack({output: {
            filename: 'main.min.js',
          },}))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(browserSync.reload({stream: true}));
});

//Compress js libs
gulp.task('scripts-libs', function () {
    return gulp.src([
        'source/assets/libs/jq/jquery-3.4.1.min.js',
        'source/assets/libs/owlcarousel/owl.carousel.min.js',
        'source/assets/libs/phone/jquery.mask.min.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
});


//Browser sync
gulp.task('browser-sync', function () {
    browserSync({ // 
        proxy: 'http://webakula-test-master/dist/',
        port: 3000,
        notify: true // 
    });

});


//Compress images
gulp.task('img', function () {
    return gulp.src(['source/assets/img/**/*.*'], ['!source/assets/img/svg'])
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('fonts', function () {
    return gulp.src('source/assets/fonts/**/*')
        .pipe(gulp.dest('dist/assets/fonts/'));
});



// Clean build
gulp.task('clean', function (done) {
    del.sync('dist');
    done();
});

//Clean cahe
gulp.task('clear', function () {
    return cache.clearAll();
});

// Transport html
gulp.task('html', function () {
    return gulp.src(['source/*.html', 'source/*.php'])
        .pipe(procss({base: 'dist'}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
});



// Transport html
gulp.task('utils', function () {
    return gulp.src(['source/utils/**/*']).pipe(gulp.dest('dist/utils/'));
});

//Watch
gulp.task('build', gulp.series('clean', 'utils', 'sass', 'css-libs', 'scripts-libs', 'scripts', 'img', 'fonts', 'html'));


gulp.task('watch', gulp.parallel('build', 'browser-sync', function () {
    gulp.watch('source/assets/sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('source/assets/img/**/*.*', gulp.parallel('img'));//test
    gulp.watch('source/*.html', gulp.parallel('html'));
    gulp.watch('source/*.php', gulp.parallel('html'));
    gulp.watch('source/assets/js/**/*.js', gulp.parallel('scripts'));
    gulp.watch('source/assets/fonts/**/*', gulp.parallel('fonts'));
}));

//Build
