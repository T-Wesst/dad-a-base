import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
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
    error: null
  };
  componentDidMount() {
    axios
      .get('/api/users/visitor')
      .then(response => {
        this.setState({ message: response.data.message });
      })
      .catch(error => {
        if (error) {
          console.log(error);
          this.setState({ error: error.message });
        }
      });
    // axios
    //   .get('/api/users/authorized')
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     this.setState({ error: err.response.data.message });
    //   });
  }
  render() {
    return (
      <>
        <Router>
          <div className="App">
            {/* <Header message={this.state.message} /> */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}
