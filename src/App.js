import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { User } from './features/register/useFormik/register';
import { Login } from './features/login/login';
import { Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path = '/'> 
      <User />
      </Route>
      <Route exact path = '/signup'> 
      <User />
      </Route>
      <Route exact path = "/login">
      <Login />
      </Route>
    </Switch>
  );
}

export default App;
