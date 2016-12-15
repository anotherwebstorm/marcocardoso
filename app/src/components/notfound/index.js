import React, {Component} from "react";
import {Link} from "react-router";

export default class NotFound extends Component {
	render () {
		return (
			<section>
				<h1>404</h1>
				<Link to="/" title="Return">
					Return Home
				</Link>
			</section>
		);
	}
}