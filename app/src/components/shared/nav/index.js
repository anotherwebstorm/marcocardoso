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
	 * Returns the main navigation links
	 *
	 * @return {Array}
	 */
	getLinks() {
		const navItems = [
			{ id: 1, title: 'About Me', slug: 'about-me' },
			{ id: 2, title: 'Highlighted Project', slug: 'highlighted-project' }
		];

		return navItems.map(navItem =>
			<Link key={navItem.id} to={navItem.slug} activeClassName="active">
				{navItem.title}
			</Link>
		);
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
			<nav className="mainnav">
				{this.getLinks()}
			</nav>
		);
	}

}

export default Nav;
