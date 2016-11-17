/**
 * @description
 * Imports
 */
import * as fesetup from "./fesetup.babel";

/**
 * @description
 * webpack config
 */
module.exports = {

	/**
	 * @description
	 * Our entry and output point
	 */
  entry: `${fesetup.JS_DIR}/app.js`,
  output: {
		path: fesetup.THEME_FE_DIR,
		filename: "scripts.js"
  },

	/**
	 * @description
	 * make sure your webpack is kept alive even with errors
	 */
	watch: true,

	/**
	 * @description
	 * Module loaders and preloaders
	 */
	module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },

	/**
	 * @description
	 * ESLINT specific configuration
	 */
	eslint: {
		configFile: "./.eslintrc",
	}

};