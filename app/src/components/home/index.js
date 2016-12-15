import React from 'react';

class Layout extends React.Component {

	handleClick() {
		alert('You clicked!');
	}

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