import React from 'react';

/**
 * @class Footer
 *
 * @description
 * Class for Footer.
 *
 * @example
 * <Footer />
 */
class Footer extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<footer className="app__layout-footer">
				<p>@2017 | Isomorphic, running on a RasPi.</p>
			</footer>
		);
	}

}

export default Footer;
