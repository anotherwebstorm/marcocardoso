import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Immutable from 'immutable';
import configureStore from '../src/state/store/configureStore';
import createRoutes from '../src/routes';


/**
 * @description
 * Make and empty object for the redux state
 *
 * @type {{}}
 */
let reduxState = {};

/**
 * @descrition
 * If the redux state is passed to the window it should be parsed to json
 * and added as a immutable key for the redux store.
 * or returned empty.
 *
 */
if (window.__REDUX_STATE__) {
	try {
		const plain = JSON.parse(decodeURIComponent(window.__REDUX_STATE__));

		for (const key of Object.keys(plain)) {
			reduxState[key] = Immutable.fromJS(plain[key]);
		}
	} catch (e) {
		reduxState = {};
	}
}

/**
 * @description
 * create a const for the store and history to be used when rendering the page
 *
 */
const store = configureStore(reduxState);
const history = syncHistoryWithStore(browserHistory, store);

/**
 * @description
 * Render the redux provider and then the routes
 * It then attaches all of this too the app
 *
 */
ReactDOM.render(
	(
		<Provider store={store}>
			{createRoutes(history)}
		</Provider>
	),
	window.document.getElementById('app')
);
