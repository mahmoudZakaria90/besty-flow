var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var uglify = require('gulp-uglify')
var uglifycss = require('gulp-uglifycss')



//sass
gulp.task('sass', function () {
   sass('./src/sass/en/*.sass',{style:'compressed'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass-ar', function () {   
   sass('./src/sass/ar/*.sass',{style:'compressed'})
    .on('error', sass.logError)
    .pipe(connect.reload())
    .pipe(gulp.dest('./public/css'));
});

//watch 
gulp.task('watch',function(){
	gulp.watch('./src/sass/en/*.sass',['sass'])
 	gulp.watch('./src/sass/ar/*.sass',['sass-ar'])
	gulp.watch('./src/js/**/*.js',['compress'])
	gulp.watch('./public/**/*.html',['html'])
})

//uglify
 gulp.task('compress',function(){
	 gulp.src('./src/js/**/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('./public/js'))
    .pipe(connect.reload())
 })


//uglifycss
gulp.task('css', function () {
  gulp.src('./public/css/**/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./public/css'));
});

//html
gulp.task('html', function() {
	gulp.src('./public/**/*.html')
		.pipe(connect.reload());

})

//connect 
gulp.task('server',function(){
	connect.server({
		root: 'public',
		livereload: true
	})
})

//default
gulp.task('default',['watch','server','css'])