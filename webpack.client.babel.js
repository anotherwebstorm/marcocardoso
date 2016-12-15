/**
 * @description
 * Imports
 */
import * as paths from './paths.babel';

/**
 * @description
 * webpack config
 */
module.exports = {

	/**
	 * @description
	 * Our entry and output point
	 */
	entry: {
		app: `${paths.APP_SRC_DIR}/client`,
	},
	output: {
		path: `${paths.DIST_ASSETS_DIR}/js`,
		filename: 'scripts.js'
	},

	/**
	 * @description
	 * Module loaders and preloaders
	 */
	module: {
		loaders: [
			{
				test: paths.APP_SRC_DIR,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},

	/**
	 * @description
	 * PLUGINS specific configuration
	 */
	plugins: []

};
