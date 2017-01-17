import React from 'react';
import { Link } from 'react-router';

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
				<Link to="/" title="Return">
					Return Home
				</Link>
				<h1>hello this is the title</h1>
				<p>More text content</p>
			</article>
		);
	}

}

export default Article;
