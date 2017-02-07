import { useRouterHistory, RouterContext, match } from 'react-router';
import { createMemoryHistory } from 'history';
import ReactDOMServer from 'react-dom/server';
import Promise from 'bluebird';
import React from 'react';
import { Provider } from 'react-redux';
import routes from '../../src/routes';
import configureStore from '../../src/state/store/configureStore';

const styleSrc = 'css/styles.css';
const scriptSrc = [
	'js/scripts.js'
];

/**
 * @description
 * WebController Class
 */
export class WebController {

	/**
	 * @description
	 * Router function that uses react router to match the route that is
	 * requested and send the correctly rendered page
	 *
	 * @public
	 * @param {object} req
	 * @param {object} res
	 */
	webAction(req, res) {
		const history = useRouterHistory(createMemoryHistory)();
		const store = configureStore();

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
				this.preRenderMiddleware(store.dispatch, renderProps.components, renderProps.params)
					.then(() => {
						const reduxState = encodeURIComponent(JSON.stringify(store.getState()));
						const htmlBody = WebController.buildHtmlBody(store, renderProps);
						res.render('index', { htmlBody, scriptSrc, styleSrc, reduxState });
					});
			}
			else {
				res.status(404).send('Not found at all');
			}
		});
	}

	/**
	 * @description
	 * This function checks if a component has the static need array.
	 * If it does it will make sure all of the actions listed there
	 * are fired before the page is rendered.
	 *
	 * @param {*} dispatch
	 * @param {*} components
	 * @param {Object} params
	 * @returns {*}
	 */
	preRenderMiddleware(dispatch, components, params) {
		const needs = components.reduce((prev, current) => {
			if (!current) {
				return prev;
			}
			const need = 'need' in current ? current.need : [];
			const wrappedNeed = 'WrappedComponent' in current &&
			'need' in current.WrappedComponent ? current.WrappedComponent.need : [];
			return prev.concat(need, wrappedNeed);
		}, []);
		const promises = needs.map((need) => dispatch(need(params)));
		return Promise.all(promises);
	}

	/**
	 * @description
	 * A factory to build the page, it returns the correct page.
	 * renders with store and props inside a redux Provider component.
	 *
	 * @param {Object} store
	 * @param {Object} renderProps
	 * @returns {*}
	 */
	static buildHtmlBody(store, renderProps) {
		return ReactDOMServer.renderToString(
			<Provider store={store}>
				{ <RouterContext {...renderProps} /> }
			</Provider>
		);
	}

}

