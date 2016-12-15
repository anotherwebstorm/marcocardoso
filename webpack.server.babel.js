/**
 * @description
 * Imports
 */
import * as paths from './paths.babel';
import fs from 'fs';

/**
 * @description
 * function that builds a list of dependent node modules to ignore for the server.
 *
 */
const nodeModules = fs.readdirSync('node_modules')
	.filter(name => !name.startsWith('.bin'))
	.reduce((result, name) => Object.assign(result, { [name]: `commonjs ${name}` }), {});

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
		app: `${paths.APP_SRC_DIR}/server`,
	},
	output: {
		path: paths.DIST_DIR,
		filename: 'server.js'
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
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	},

	/**
	 * @description
	 * special config for server
	 */
	target: 'node',
	externals: nodeModules,

	/**
	 * @description
	 * PLUGINS specific configuration
	 */
	plugins: []

};
