import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Movies from './components/Movies';
import Lifecycle from './components/Lifecycle';
import Users from './components/Users';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.css';
import {Route,BrowserRouter as Router}  from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Movies} />
        <Route path="/users" component={Users} />
        <Route path="/lifecycle" component={Lifecycle} />
        <Route path="/userlist" component={UserList} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
