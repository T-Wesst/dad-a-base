import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
export default class App extends Component {
  state = {
    message: null,
    username: '',
    password: '',
    email: '',
    error: null,
    isAuth: false
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSignUp = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    axios
      .post('/api/users/signup', { username, password, email })
      .then(response => {
        let isAuth = response.data.status === 'OK' ? true : false;
        this.setState({ isAuth, message: response.data.message, error: null });
        alert(this.state.message);
      })
      .catch(error => {
        if (error) {
          this.setState({ error, message: error.response.data.message });
          alert(this.state.message);
        }
      });
  };
  handleLogin = event => {
    event.preventDefault();
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

  render() {
    return (
      <>
        <Router>
          {this.state.isAuth ? <Header message={this.state.message} /> : ''}
          <Switch>
            <Route exact path="/" render={() => (
                <Landing handleSubmit={this.handleLogin} handleChange={this.handleOnChange}/>
              )}/>
            <Route exact path="/signup" render={() => (
                <SignUp handleChange={this.handleOnChange} handleSubmit={this.handleSignUp}/>
              )}/>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}
