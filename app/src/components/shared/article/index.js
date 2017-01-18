import React from 'react';
import { Link } from 'react-router';

import Page from '../helpers/page';

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
	 * Initial Constructor
	 */
	constructor() {
		super();

		this.state = {
			title: null,
			content: null
		};
	}

	/**
	 * @description
	 * Before the component is rendered into a page
	 */
	componentWillMount() {
		const page = new Page();
		page.getPage('about-me');
	}

	// componentWillReceiveProps(nextProps) {
	// 	//if this.props !== nextProps {
	// //}
	// }

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		console.log(`slug is: ${this.props.params}`);

		return (
			<article>
				<Link to="/" title="Return"> Return Home </Link>
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
