/**
 * @description
 * Contains all the necessary route setup for the FRONTEND
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
const THEME_NAME = 'labrooms';
const HTML_DIR = path.join(__dirname, '../html');
const THEME_DIR = `${HTML_DIR}/wp-content/themes/${THEME_NAME}`;
const THEME_FE_DIR = `${HTML_DIR}/wp-content/themes/${THEME_NAME}/assets`;
const SRC_DIR = path.join(__dirname, 'src');

const SCSS_DIR = `${SRC_DIR}/assets/scss`;
const JS_DIR = `${SRC_DIR}/assets/js`;
const FONTS_DIR = `${SRC_DIR}/assets/fonts`;
const IMG_DIR = `${SRC_DIR}/assets/img`;

/**
 * @description
 * Start exporting all our constants
 */
export {
	THEME_NAME,
	HTML_DIR,
	THEME_DIR,
	THEME_FE_DIR,
	SRC_DIR,
	SCSS_DIR,
	JS_DIR,
	FONTS_DIR,
	IMG_DIR,
};
