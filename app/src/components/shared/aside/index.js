import React from 'react';
import Nav from '../nav';
import Header from '../header';
import Follow from '../follow';

/**
 * @class Aside
 *
 * @description
 * Class for Aside.
 *
 * @example
 * <Aside />
 */
class Aside extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<aside className="app__layout-aside">
				<Header />
				<br />
				<Nav />
				<br />
				<Follow />
				<br />
			</aside>
		);
	}

}

export default Aside;
