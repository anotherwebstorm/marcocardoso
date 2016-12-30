import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import AppLayout from '../components';
import Home from '../components/home';
import NotFound from '../components/notfound';

/**
 * @description
 * All of the routes for the app are listed here.
 * Order is important as the first one that matches a route will be the one used
 *
 * @param {Object} history
 * @returns {XML}
 */
export default function routes(history) {
	return (
		<Router history={history}>
			<Route path="/" component={AppLayout}>
				<Route path="404" component={NotFound} />
				<Route path="**" component={NotFound} />
				<IndexRoute component={Home} />
			</Route>
		</Router>
	);
}
