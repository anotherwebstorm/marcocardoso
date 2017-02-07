import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { responsiveStateReducer } from 'redux-responsive';
import articleState from './article';

/**
 * @description
 * Combines all of the reducers for use in the store.
 *
 */
const rootReducer = combineReducers({
	browser: responsiveStateReducer,
	routing: routerReducer,
	articleState
});

export default rootReducer;
