/**
 * @description
 * Imports
 */
import * as fesetup from "./fesetup.babel";
import webpackconf from "./webpack.config.babel";

import gulp from "gulp";
import gulpsync from "gulp-sync";
import sass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import concat from "gulp-concat";
import gutil from"gulp-util";
import webpack from "webpack";
import phpconnect from "gulp-connect-php";
import browserSync from "browser-sync";
import imagemin from "gulp-imagemin";
import sassLint from "gulp-sass-lint";

/**
 * @description
 * Slight Plugin(s) Configuration / Instance Initialization
 */
const reload = browserSync.reload;
const syncGulp = gulpsync(gulp);

/**
 * @description
 * [IMAGES TASK] - Compresses with imagemin / copies all the images to the dist folder
 */
gulp.task('images', () => {
	return gulp.src(`${fesetup.IMG_DIR}/**/**`)
		.on('error', function (err) {
			gutil.log(err);
			this.emit('end');
		})
		.pipe(imagemin())
		.pipe(gulp.dest(`${fesetup.THEME_FE_DIR}/img`));
});

/**
 * @description
 * [FONTS TASK] - Compiles / copies all the fonts to the dist folder
 */
gulp.task('fonts', () => {
	return gulp.src(`${fesetup.FONTS_DIR}/**/**`)
		.on('error', function (err) {
			gutil.log(err);
			this.emit('end');
		})
		.pipe(gulp.dest(`${fesetup.THEME_FE_DIR}/fonts`));
});

/**
 * @description
 * [STYLES TASK] - Compiles all the scss into css
 */
gulp.task('styles', () => {
	return gulp.src(`${fesetup.SCSS_DIR}/app.scss`)
		.pipe(sassGlob())
		.pipe(sass.sync({
			outputStyle: 'compressed',
			errLogToConsole: true,
			includePaths: [
				'./node_modules/normalize-scss/sass/',
				'./node_modules/bourbon/app/assets/stylesheets/',
			],
		}))
		.on('error', function (err) {
			gutil.log(err);
			this.emit('end');
		})
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(fesetup.THEME_FE_DIR));
});

/**
 * @description
 * [STYLES LINT TASK] - Checks if your sass/scss files are ok.
 */
gulp.task('styles-lint', () => {
	return gulp.src(`${fesetup.SCSS_DIR}/**/*.scss`)
		.pipe(sassLint({
			configFile: './.sass-lint.yml',
			cacheConfig: true,
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());
});


/**
 * @description
 * [SCRIPTS TASK] - Compiles all the JS along with webpack
 * {watch} - make sure to keep webpack alive even if there's a warning/error
 */
gulp.task('scripts', () => {
	webpack(webpackconf, (err, stats) => {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			colors: true,
		}));

		/** reload browser */
		reload();
	});
});

/**
 * @description
 * [PHP SERVER] - starts up a php server with the dist folder as public
 *
 * {base} - the public folder where the php will look into
 * {hostname} - our localhost ip
 * {port} - the needed port
 * {keepalive} - keep the server alive
 * {stdio} - make sure we ignore all the server logs when working with the terminal
 */
gulp.task('phpserver', function() {
	phpconnect.server({
		base: fesetup.HTML_DIR,
		hostname: '127.0.0.1',
		port: 8010,
		keepalive: true,
		stdio: 'ignore',
	});
});

/**
 * @description
 * [BROWSER SYNC] - starts up a browser sync environment by creating a proxy of our php server
 * {proxy} - the php server ip/port we just setted up on the phpserver task
 * {port} - the browsersync port
 * {open} - either open or not a browser window
 * {notify} - dont log certain shizzle
 * {ui} - no need to create browsersync ui
 */
gulp.task('browser-sync', ['phpserver'], () => {
	browserSync({
		proxy: '127.0.0.1:8010',
		port: 8080,
		open: false,
		notify: false,
		ui: false,
	});
});

/**
 * @description
 * [START DEV] - starts up a gulp task for dev environment
 */
gulp.task('start-dev', syncGulp.sync([
	'styles-lint',
	'styles',
	'fonts',
	'images',
	'scripts',
	'browser-sync',
]), () => {
	/** watching the main required files for changes */
	gulp.watch(`${fesetup.SCSS_DIR}/**/*.scss`, ['styles-lint', 'styles']).on('change', reload);
	gulp.watch(`${fesetup.THEME_DIR}/**/*.php`).on('change', reload);
});
