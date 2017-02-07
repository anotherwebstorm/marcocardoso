import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getArticleData } from '../../../state/actions/getarticle';

/**
 * @class Article
 *
 * @description
 * Class for Article.
 *
 * @example
 * <Article />
 */
class Article extends Component {

	static propTypes = {
		params: PropTypes.shape({
			slug: PropTypes.string
		}),
		article: PropTypes.object,
		getTheArticle: PropTypes.func
	};

	static defaultProps = {};

	// server actions that are fired before the page is rendered
	static need = [
		getArticleData
	];

	/**
	 * @constructor
	 *
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * @description
	 * Before the component is rendered into a page
	 */
	componentWillMount() {
		if (typeof this.props.params !== 'undefined') {
			this.props.getTheArticle(this.props.params.slug);
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
			this.props.getTheArticle(nextProps.params.slug);
		}
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
				<h1>{this.props.article.title}</h1>
				<div
					className="articlecontent"
					dangerouslySetInnerHTML={{ __html: this.props.article.content }}
				/>
			</article>
		);
	}

}

// Extract the props we want to connect from the current store state
const mapStateToProps = (state) => {
	return {
		article: state.articleState
	};
};

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = (dispatch) => {
	return {
		getTheArticle: (urlParams) => {
			dispatch(getArticleData(urlParams));
		}
	};
};

// Connect this component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Article);
