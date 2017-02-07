import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * @description
 * a variable that groups all of the middleware that the store requires.
 *
 */
const createStoreWithMiddleware = applyMiddleware(
	apiMiddleware,
	thunk,
)(createStore);

/**
 * @description
 * Exportable store creation that gets the initial state and builds
 * the store with all of its middleware.
 * Also note the final line at the bottom,
 * this allows for debugging with the chrome dev tools
 *
 * @param {Object} initialState
 * @returns {*}
 */
export default function configureStore(initialState) {
	return createStoreWithMiddleware(
		rootReducer,
		initialState,
		compose(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
		)
	);
}
