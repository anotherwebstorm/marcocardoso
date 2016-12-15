export class ErrorController {

	/**
	 *
	 * @public
	 * @param req
	 * @param res
	 * @param err
	 */
	errorAction (err, req, res) {
		/* eslint-disable no-console */
		console.log(err.stack);
		res.status(500).send("Error");
	}
}