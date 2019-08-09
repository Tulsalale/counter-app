import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Signup extends Component{
	render(){

		const a = {
			width : '15%'
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
				<input className="w3-radio" type="radio" name="gender" value="male" checked />
				<label>Male</label>
			</p>

			<p>
				<input className="w3-radio" type="radio" name="gender" value="female" />
				<label>Female</label>
			</p>

			<p>
				<input className="w3-radio" type="radio" name="gender" value="" disabled />
				<label>Don't know (Disabled)</label>
			</p>

			<p>
				<input id="milk" className="w3-check" type="checkbox" checked="checked" />
				<label>Stay logged in</label>
			</p>

			<p>
				<button className="w3-button w3-section w3-teal w3-ripple"> Sign in </button>
			</p>

			</form>

		</div>

		);
	}
}
export default Signup;
