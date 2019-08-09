import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';

const routing = (
  <Router>
    <div>
      	<Route exact path="/" component={Counter} />
      	<Route path="/Login" component={Login} />
      	<Route path="/Dashboard" component={Dashboard} />
      	<Route path="/Signup" component={Signup} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
