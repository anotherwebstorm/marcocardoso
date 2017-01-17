import React from 'react';
import { Link } from 'react-router';

/**
 * @class Header
 *
 * @description
 * Class for Header.
 * Where the main logo / identification of the site is
 * Also acts as a return to the homepage link
 *
 * @example
 * <Header />
 */
class Header extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<header className="mainheader">
				<Link to="/" title="Marco Cardoso - Frontend Developer">
					<span>Marco Cardoso</span>
					<br />
					<span className="subtitle">Frontend Developer</span>
				</Link>
			</header>
		);
	}

}

export default Header;
