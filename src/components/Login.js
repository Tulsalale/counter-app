import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';

class Login extends Component{

	state = {
		count:1
	}

	render(){

		const a = {
			width : '20%'
		}

		return(

		<div className="w3-container w3-half w3-margin-top">

			<form className="w3-container w3-card-4">
			<p>
				<label>Name</label>
				<input className="w3-input" type="text" style={a} />
				
			</p>

			<p>
				<label>Password</label>
				<input className="w3-input" type="password" style={a} required />
			</p>

			<p>
				<Link to={'/Dashboard'} className="nav-link"><button className="w3-button w3-section w3-teal w3-ripple"> Log in </button></Link>
			</p>

			</form>

		</div>

		);
	}
}
export default Login;
