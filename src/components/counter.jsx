import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

class  Counter extends Component {
	
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Signup'} className="nav-link">Create account</Link>
                             </li>
                            <li className="nav-item">
                                <Link to={'/Login'} className="nav-link">Login</Link>
                             </li>
                            
                        </ul>
                    </div>
                </nav>
			</div>
		);	
	}
}

export default Counter;