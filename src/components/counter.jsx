import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class  Counter extends Component {
	state = {
		count:1
	}
	render() {
		return (
			<div>
				<h1> Hi, There </h1>
				<Link to={'/'}> Login </Link>
			</div>
		);	
	}
}

export default Counter;