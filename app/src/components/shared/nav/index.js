import React from 'react';
import { Link } from 'react-router';

/**
 * @class Nav
 *
 * @description
 * Class for Nav.
 * Where the main navigation of the app is built
 *
 * @example
 * <Nav />
 */
class Nav extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<nav className="mainnav">
				<Link to="/" title="Highlighted Project">
					Highlighted Project
				</Link>
				<br />
				<Link to="/" title="About Me">
					About Me
				</Link>
			</nav>
		);
	}

}

export default Nav;
