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
	 * Initial Constructor
	 */
	constructor() {
		super();

		this.state = {
			navItems: []
		};
	}

	/**
	 * @description
	 * Before the component is rendered into a page
	 */
	componentWillMount() {
		this.getLinks();
	}

	/**
	 * @description
	 * Fetches and returns the main navigation links
	 */
	getLinks() {
		// TODO This will be dynamic data from Cosmic JS
		const fetchedNavItems = [
			{ id: 1, title: 'About Me', slug: 'about-me' },
			{ id: 2, title: 'Highlighted Project', slug: 'highlighted-project' }
		];

		this.setState({
			navItems: fetchedNavItems
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
			<nav className="mainnav">
				{
					this.state.navItems.map(navItem =>
						<Link key={navItem.id} to={navItem.slug} activeClassName="active">{navItem.title}</Link>
					)
				}
			</nav>
		);
	}
}

export default Nav;
