import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import axios from 'axios';
export default class App extends Component {
  state = {
    message: null,
    username: '',
    password: '',
    error: null,
    isAuth: false
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleLogin = () => {
    const { username, password } = this.state;
    axios
      .post('/api/users/login', { username, password })
      .then(response => {
        let isAuth = response.data.status === 'OK' ? true : false;
        this.setState({ isAuth, message: response.data.message, error: null });
        alert(this.state.message);
      })
      .catch(error => {
        if (error)
          this.setState({ error, message: error.response.data.message });
        alert(this.state.message);
      });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.handleLogin();
  };

  render() {
    return (
      <>
        <Router>
          {this.state.isAuth ? <Header message={this.state.message} /> : ''}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Landing
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleOnChange}
                />
              )}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}
