import React from 'react';
import Aside from './shared/aside';
import Footer from './shared/footer';

/**
 * @class Layout
 *
 * @description
 * Class for Layout.
 *
 * @example
 * <Layout />
 */
class Layout extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<div className="app__layout">
				<Aside />
				<section className="app__layout-content">
					{this.props.children}
				</section>
				<Footer />
			</div>
		);
	}

}

export default Layout;

Layout.propTypes = {
	children: React.PropTypes.node
};
