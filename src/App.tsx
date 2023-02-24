import React, { useEffect } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { createBrowserHistory, History } from 'history'
import { useDispatch } from "react-redux"
import { AnyAction, Dispatch } from 'redux'

function App() {

  const history: History = createBrowserHistory();
  const dispatch: Dispatch<AnyAction> = useDispatch()

  useEffect(() => {
    if (window.localStorage.getItem('Login')) {
      dispatch({ type: 'LOGIN_USER' });
    }
  }, [dispatch])

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard heading="Dashboard" />
        </Route>
        <Route path="/invoices">
          <Dashboard heading="Invoices" />
        </Route>
        <Route path="/settings">
          <Dashboard heading="Settings" />
        </Route>
        <Route path="/">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
