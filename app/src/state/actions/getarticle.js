/**
 * @description
 * Action to get article data.
 * Splitted in 3 actions for request/success/failure
 */

import { CALL_API } from 'redux-api-middleware';

export const REQUEST_ARTICLE_DATA = Symbol('REQUEST_ARTICLE_DATA');
export const SUCCESS_ARTICLE_DATA = Symbol('SUCCESS_ARTICLE_DATA');
export const FAILURE_ARTICLE_DATA = Symbol('FAILURE_ARTICLE_DATA');

/**
 *
 * @description
 * returns a function that can dispatch actions and returns a Promise for when it's all complete!
 *
 * @param {string} slug - The current slug
 * @return {function(*, *)}
 */
export function getArticleData(slug) {
	return {
		[CALL_API]: {
			endpoint: `https://cosmicjs.com/v1/marcocardoso/object/${slug}`,
			method: 'GET',
			headers: {
				Accept: 'application/json'
			},
			types: [
				REQUEST_ARTICLE_DATA,
				{
					type: SUCCESS_ARTICLE_DATA,
					meta: slug
				},
				{
					type: FAILURE_ARTICLE_DATA,
					meta: (action, state, res) => {
						// Todo Redirect to 404
					}
				}
			],
		},
	};
}
