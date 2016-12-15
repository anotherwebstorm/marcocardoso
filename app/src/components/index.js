import React from 'react';

class AppLayout extends React.Component {

	render() {
		return (
			<div className="app__wrapper-content">
				{this.props.children}
			</div>
		);
	}

}

export default AppLayout;