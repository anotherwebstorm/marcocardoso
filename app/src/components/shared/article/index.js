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
				<h1>{this.props.title}</h1>
				<p>{this.props.content}</p>
			</article>
		);
	}

}

export default Article;

Article.propTypes = {
	title: React.PropTypes.string,
	content: React.PropTypes.string
};
