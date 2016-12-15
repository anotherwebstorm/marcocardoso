/**
 * @description
 * Necessary paths are declared
 */

/**
 * @description
 * Imports
 */
import * as path from 'path';

/**
 * @description
 * Constants
 */
const APP_SRC_DIR = path.join(__dirname, 'app');
const DIST_DIR = path.join(__dirname, 'dist');
const ASSETS_SRC_DIR = `${APP_SRC_DIR}/assets`;
const DIST_ASSETS_DIR = `${DIST_DIR}/assets`;
const SERVER_SRC_DIR = `${APP_SRC_DIR}/server`;
const COMPONENTS_SRC_DIR = `${APP_SRC_DIR}/src/components`;

const SCSS_SRC_DIR = `${ASSETS_SRC_DIR}/scss`;
const VIEWS_SRC_DIR = `${SERVER_SRC_DIR}/views`;

/**
 * @description
 * Start exporting all our constants
 */
export {
	APP_SRC_DIR,
	ASSETS_SRC_DIR,
	DIST_DIR,
	DIST_ASSETS_DIR,
	SERVER_SRC_DIR,
	COMPONENTS_SRC_DIR,
	SCSS_SRC_DIR,
	VIEWS_SRC_DIR
};