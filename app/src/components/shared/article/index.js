import React from 'react';
import { Link } from 'react-router';
import Fetcher from '../../../utils/fetcher';

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
			showReturn: false,
			articleContent: {}
		};
	}

	/**
	 * @description
	 * Before the component is rendered into a page
	 */
	componentWillMount() {
		if (typeof this.props.params !== 'undefined') {
			this.fetchArticleData(this.props.params.slug);
		}
	}

	/**
	 * @description
	 * update the state depending on the previous and upcoming props
	 *
	 * @param {object} nextProps
	 */
	componentWillReceiveProps(nextProps) {
		if (this.props.params.slug !== nextProps.params.slug) {
			this.fetchArticleData(nextProps.params.slug);
		}
	}

	/**
	 *
	 * @param {string} slug
	 */
	fetchArticleData(slug) {
		const contentFetch = new Fetcher();
		contentFetch
			.getArticleContent(slug)
			.then((response) => {
				this.setState({
					articleContent: {
						title: response.title,
						content: response.content
					}
				});
			});
	}

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
				<Link to="/" title="Return"> Return Home </Link>
				<h1>{this.state.articleContent.title}</h1>
				<div
					className="articlecontent"
					dangerouslySetInnerHTML={{ __html: this.state.articleContent.content }}
				/>
			</article>
		);
	}

}

export default Article;

Article.propTypes = {
	params: React.PropTypes.shape({
		slug: React.PropTypes.string
	})
};
