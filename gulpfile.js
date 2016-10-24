var gulp = require('gulp');

gulp.task('default', [ 'styles', 'images']);


// SASS

var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('./dev/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./site/assets'))
    .pipe(connect.reload())
});

// images
var imagemin = require('gulp-imagemin')

gulp.task('images', function(){
  return gulp.src('./dev/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./site/img/'))
    .pipe(connect.reload())
});

// Watch

var watch = require('gulp-watch');

gulp.task('watch', function(){
	// gulp.watch('./dev/jade/**/*.jade', ['templates']);
	gulp.watch('./dev/scss/**/*.scss', ['styles']);
  gulp.watch('./dev/img/*',          ['images']); 
});

// connect-multi
var connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
	host: '127.0.0.1',
	root: ['site'],
	port: 9090,
	livereload: true,
	open: {
		browser: 'Chrome'
	}
}));

// My worker

gulp.task('dev', ['default', 'connect', 'watch']);