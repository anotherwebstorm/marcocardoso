/**
 * @description
 * ErrorController Class
 */
export class ErrorController {

	/**
	 *
	 * @public
	 * @param {object} err
	 * @param {object} req
	 * @param {object} res
	 */
	errorAction(err, req, res) {
		/* eslint-disable no-console */
		console.log(err.stack);
		res.status(500).send('Error');
	}
}

