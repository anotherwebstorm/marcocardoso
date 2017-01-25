import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class Follow
 *
 * @description
 * Class for Follow.
 * Where the social follow links are displayed
 *
 * @example
 * <Follow />
 */
class Follow extends Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<div className="follow">
				<Link to="/" title="Follow Marco on Twitter">
					Twitter
				</Link>
				<br/>
				<Link to="/" title="Follow Marco on Github">
					Github
				</Link>
			</div>
		);
	}

}

export default Follow;
