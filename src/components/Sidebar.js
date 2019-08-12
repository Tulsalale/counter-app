import React, { Component } from 'react';

class Sidebar extends Component{
	render(){
		return (
			<div className="col-sm-3 sidenav">
			<ul className="nav nav-pills nav-stacked navbar-nav mr-auto">
				<li className="nav-item active"><a href="">Home</a></li>
				<br/>
				<li className="nav-item">Pending Task List</li>
				<br/>
				<li className="nav-item">Completed Task List</li>
			</ul>
			<br/>
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Search."/>
				<span className="input-group-btn">
				<button className="btn btn-default" type="button">
				<span className="glyphicon glyphicon-search"></span>
				</button>
				</span>
			</div>
			</div>
		);
	}
}
export default Sidebar;