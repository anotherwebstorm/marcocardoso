import React from 'react';

/**
 * @class Article
 *
 * @description
 * Class for Article.
 *
 * @example
 * <Article />
 */
class Article extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<article>
				<h1>hello this is the article</h1>
				<p>Also lets read a bit</p>
			</article>
		);
	}

}

export default Article;
