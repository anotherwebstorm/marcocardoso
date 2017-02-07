import Immutable from 'immutable';
import * as ArticleActionType from '../actions/getarticle';

const defaultState = Immutable.fromJS({});

/**
 * @description
 * Gets the article data. and merges it into an array.
 * This type of action is really important so that we always have
 * the data and don't have to re request it every time.
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {*}
 */
function articleState(state = defaultState, action) {
	switch (action.type) {

		case ArticleActionType.REQUEST_ARTICLE_DATA : {
			return state;
		}

		case ArticleActionType.SUCCESS_ARTICLE_DATA : {
			let currentJsState = state.toJS();
			let newState = { ...currentJsState, [action.meta]: action.payload };
			return state.merge(newState);
		}

		case ArticleActionType.FAILURE_ARTICLE_DATA : {
			return state;
		}

		default:
			return state;
	}
}

export default articleState;
