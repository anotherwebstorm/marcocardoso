import React from 'react';

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

	handleClick() {
		alert('You clicked!');
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
			<section>
				<h1>welcome</h1>
				<p>Lets do it</p>
				<button onClick={this.handleClick}>Click Me</button>
			</section>
		);
	}

}

export default Layout;
