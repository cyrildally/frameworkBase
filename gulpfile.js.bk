var gulp = require( 'gulp' );
var util = require( 'gulp-util' );
var del = require( 'del' );
var concat = require( 'gulp-concat' );
var rename = require( 'gulp-rename' );
var uglify = require( 'gulp-uglify' );

gulp.task( 'jsmin', function() {
	del( 'public/js/' );
	return gulp.src( [ 'source/js/**/*.js', 'bower_components/jquery/dist/jquery.min.js' ] )
	.pipe( uglify() )
	.pipe( concat( 'js.min.js' ) )
	.pipe( gulp.dest( 'public/js/' ) );
});

gulp.task( 'default', function() {
	console.log( 'Task default does not exist yet.' );
});
