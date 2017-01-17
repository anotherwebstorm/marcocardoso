import React from 'react';
import Article from '../shared/article';

/**
 * @class Home
 *
 * @description
 * Class for Home.
 *
 * @example
 * <Home />
 */
class Home extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<Article
				title="Welcome to my site"
				content="More text content"
			/>
		);
	}

}

export default Home;
