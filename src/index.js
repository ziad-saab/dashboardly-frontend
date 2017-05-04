import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreateBoard from './CreateBoard';
import Dashboard from './Dashboard';
import Board from './Board';

import auth from './auth'

import './index.css';

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/boards/:id" component={Board}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route onEnter={requireAuth}>
          <Route path="/create" component={CreateBoard}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Route>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
