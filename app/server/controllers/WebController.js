import {useRouterHistory, RouterContext, match} from "react-router";
import {createMemoryHistory} from "history";
import ReactDOMServer from "react-dom/server";
import React from "react";
import routes from "../../src/routes";

let styleSrc = "css/styles.css";
let scriptSrc = [
	"js/scripts.js"
];

export class WebController {

	/**
	 * @description
	 * Router function that uses react router to match the route that is
	 * requested and send the correctly rendered page
	 *
	 * @public
	 * @param req
	 * @param res
	 * @param next
	 */
	webAction(req, res, next) {

		let history = useRouterHistory(createMemoryHistory)();

		match({
			routes: routes(history),
			location: req.url
		}, (error, redirectLocation, renderProps) => {
			if (error) {
				res.status(500).send(error.message);
			}
			else if (redirectLocation) {
				res.redirect(302, redirectLocation.pathname + redirectLocation.search);
			}
			else if (renderProps) {
				let htmlBody = WebController.buildHtmlBody(renderProps);
				res.render("index", {htmlBody, scriptSrc, styleSrc});
			}
			else {
				res.status(404).send('Not found at all');
			}
		})
	}

	static buildHtmlBody (renderProps) {
		return ReactDOMServer.renderToString(
			<RouterContext {...renderProps} />
		);
	}

}