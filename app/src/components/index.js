import React from 'react';

/**
 * @class AppLayout
 *
 * @description
 * Class for AppLayout.
 *
 * @example
 * <AppLayout />
 */
class AppLayout extends React.Component {

	/**
	 * @description
	 * Component Method
	 * Renders a component
	 *
	 * @returns {XML} component
	 */
	render() {
		return (
			<div className="app__wrapper-content">
				{this.props.children}
			</div>
		);
	}

}

export default AppLayout;