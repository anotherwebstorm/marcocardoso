/**
 * @description
 * Imports
 */
import gulp from "gulp";
import gulpsync from "gulp-sync";
import sass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import concat from "gulp-concat";
import gutil from"gulp-util";
import del from 'del';
import * as paths from './paths.babel';

/**
 * @description
 * Slight Plugin(s) Configuration / Instance Initialization
 */
const syncGulp = gulpsync(gulp);
const emitError = (err) => {
	gutil.log(err);
	this.emit('end');
};
const sassOptions = {
	errLogToConsole: true,
	includePaths: [
		'./node_modules/normalize-scss/sass/',
		'./node_modules/bourbon/app/assets/stylesheets/'
	]
};

/**
 * @description
 * [DEL ASSETS] Deletes all the assets folder
 */
gulp.task('del-assets', () => {
	return del([
		`${paths.DIST_ASSETS_DIR}/css`,
		`${paths.DIST_ASSETS_DIR}/fonts`,
		`${paths.DIST_ASSETS_DIR}/img`,
		`${paths.DIST_ASSETS_DIR}/views`
	]);
});

/**
 * @description
 * [STYLES TASK] - Compiles all the scss into the dist assets folder
 */
gulp.task('styles', () => {
	gulp.src(`${paths.SCSS_SRC_DIR}/app.scss`)
		.pipe(sassGlob())
		.pipe(sass.sync(Object.assign({
			outputStyle: 'expanded'
		}, sassOptions)))
		.on('error', emitError)
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(`${paths.DIST_ASSETS_DIR}/css`));
});


/**
 * @description
 * [SERVER VIEWS] - generate all server views to the dist folder
 */
gulp.task('server-views', () => {
	return gulp.src(`${paths.VIEWS_SRC_DIR}/**/**`)
		.on('error', emitError)
		.pipe(gulp.dest(`${paths.DIST_ASSETS_DIR}/views`))
});

/**
 * @description
 * [BUILD ASSETS] - builds all assets required
 */
gulp.task('build-assets', syncGulp.sync([
	'del-assets',
	'server-views',
	'styles'
]));


