import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './dashboard.css';
import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';
import Sidebar from './Sidebar';
import TableRow from './TableRow';

class Dashboard extends Component{

	constructor(props) {
        super(props);

        this.state = {
            show: false,
            id:'',
            task: '',
            status: 'new',
      		data: []
        };
    }

    componentWillMount(){
      axios.get('http://localhost/api/todolist/read.php')
        .then(response => {
          // console.log(response.data.records);
          this.setState({ data: response.data.records});
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    onChangeId = (e)=> {
        this.setState({
        id: e.target.value
        });
    }

    onChangeTask = (e)=> {
        this.setState({
        task: e.target.value
        });
    }

    onChangeStatus = (e)=> {
        this.setState({
        status: e.target.value
        });
    }

    getTodolist = (object) =>{
        object.show = true;
        this.setState(object);
    }

	handleShow = () =>{
    this.setState({ show: true });
    }

    handleClose = () =>{
    this.setState({ show: false });
    }

    initFunction = () => {
        this.componentWillMount();
    }

    deleteTodolist = (object) =>{
        axios.get('http://localhost/api/todolist/delete.php?id='+object)
        .then(response => {
            console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
       this.initFunction();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const qs = require('qs');  

        const obj = {
            id: this.state.id,
            task: this.state.task,
            status: this.state.status
            }
            console.log(obj);
        if(obj.id === ""){
            axios.post('http://localhost/api/todolist/create.php',qs.stringify(obj))
            .then(response => {this.setState({message: response.data.message})
            /*console.log(response.data)*/})
            .catch(error => console.log(error));
            this.setState({
                id:'',
                task: '',
                status: ''
                })
            this.initFunction();
            }else{
                axios.post('http://localhost/api/todolist/update.php', qs.stringify(obj))
            .then(res => {this.setState({message: res.data.message})
            console.log(res.data)});
            this.setState({
                id:'',
                task: '',
                status: ''
                })
            this.initFunction();
            }
             
        }

	render (){
		return (
			<Router>
			<div>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
			<div className="container-fluid">
				<div className="row content">
					<Sidebar />
					<div className="col-sm-9">
						<h2> Welcome !! </h2>
		                <Button style={{float: 'right'}} variant="primary" onClick={this.handleShow}>New Task</Button>
	                	<Modal show={this.state.show} onHide={this.handleClose}>
	                	<form onSubmit={this.onSubmit}>
		                	<Modal.Header closeButton>
	                        	<Modal.Title>Add New Task</Modal.Title>
	                    	</Modal.Header>
	                    	<Modal.Body>
	                    		<div style={{marginTop: 10}}>
		                    		<div className="form-group">
	                                    <input 
	                                    type="hidden" 
	                                    className="form-control"
	                                    value={this.state.id}
	                                    onChange={this.onChangeId}
	                                    />
	                                </div>
	                                <div className="form-group">
	                                	<label>Task:  </label>
						            		<input type= "text"
						            		className="form-control"
						            		value={this.state.task}
						            		onChange={this.onChangeTask}
						            		/>
						            </div>
						            <div className="form-group">
						            <label>status:  </label>
							            <select
							            className = "form-control"
							            name = "status" 
							            onChange={this.onChangeStatus}
							            value={this.state.status} 
							            defaultValue= "new" 
							            >
											<option value="new">New</option>
											<option value="pending">Pending</option>
											<option value="completed">Completed</option>
										</select>
									</div>
						        </div>
					        </Modal.Body>
		                    <Modal.Footer>
		                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
		                        <Button variant="primary" value="submit" onClick={this.handleClose} type="submit">Save</Button>
		                    </Modal.Footer>
				        </form>
				        </Modal>
				        <div>
							<h3 align="center">Task List</h3>
							<table className="table table-striped" style={{ marginTop: 20 }}>
								<thead>
									<tr>
									<th>ID</th>
									<th>Task</th>
									<th>status</th>
									<th colSpan="2">Action</th>
									</tr>
								</thead>
								<tbody>
									{ this.tabRow() }
								</tbody>
							</table>
						</div>
	                </div> {/*colsm-9*/}
				</div>{/*row-content*/}
			</div>{/*contrainer fluid*/}
		<footer className="container-fluid">
		  <p>Footer Text</p>
		</footer>
		</div>
		</Router>
		);
	}


	tabRow = () => {
    	const getTodolist = this.getTodolist;
    	const deleteTodolist = this.deleteTodolist;
      return this.state.data.map(function(object, i){
          return (<TableRow obj={object} key={i} getTodolist={getTodolist} deleteTodolist={deleteTodolist}></TableRow>);
      });
    }
}
export default Dashboard;