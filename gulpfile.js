var gulp = require( 'gulp' );
var elixir = require( 'laravel-elixir' );
var util = require( 'gulp-util' );
var del = require( 'del' );
var concat = require( 'gulp-concat' );
var rename = require( 'gulp-rename' );
var uglify = require( 'gulp-uglify' );

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'source/';
elixir.config.versioning.buildFolder = '';

var publicCssFolder = elixir.config.publicPath + '/' + elixir.config.css.folder + '/';

elixir(function(mix) {
    mix.sass( ['**/*.scss'], publicCssFolder + 'css.css' );

    mix.scripts( ['source/js/**/*.js'] );

    mix.version( ['js/all.js', 'css/css.css'] );
});


