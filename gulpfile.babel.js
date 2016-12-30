/**
 * @description
 * Imports
 */
import gulp from 'gulp';
import gulpsync from 'gulp-sync';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import sassLint from 'gulp-sass-lint';
import concat from 'gulp-concat';
import gutil from 'gulp-util';
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
	del([
		`${paths.DIST_ASSETS_DIR}/css`,
		`${paths.DIST_ASSETS_DIR}/fonts`,
		`${paths.DIST_ASSETS_DIR}/img`,
		`${paths.DIST_ASSETS_DIR}/views`
	]);
});

/**
 * @description
 * [STYLES LINT TASK] - Checks if your sass/scss files are ok.
 */
gulp.task('styles-lint', () => {
	gulp.src(`${paths.SCSS_SRC_DIR}/**/*.scss`)
		.pipe(sassLint({
			configFile: './.sass-lint.yml',
			cacheConfig: true,
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());
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
	gulp.src(`${paths.VIEWS_SRC_DIR}/**/**`)
		.on('error', emitError)
		.pipe(gulp.dest(`${paths.DIST_ASSETS_DIR}/views`));
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

/**
 * @description
 * [WATCH ASSETS] - watches all assets required
 */
gulp.task('watch-assets', () => {
	gulp.watch(`${paths.SCSS_SRC_DIR}/**/*.scss`, ['styles-lint', 'styles']);
});
