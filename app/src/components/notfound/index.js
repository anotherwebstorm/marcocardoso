import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class NotFound
 *
 * @description
 * Class for NotFound.
 *
 * @example
 * <NotFound />
 */
class NotFound extends Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<section>
				<h1>404</h1>
				<Link to="/" title="Return">
					Return Home
				</Link>
			</section>
		);
	}

}

export default NotFound;
