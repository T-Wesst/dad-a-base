import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../index.css';
import axios from 'axios';

export default class Landing extends Component {
  state = {
    message: ''
  };
  componentDidMount() {
    axios
      .get('/api/users/visitor')
      .then(response => this.setState({ message: response.data.message }));
  }
  render() {
    return (
      <>
        <div id="landing-header">
          <h1 className="text-danger">{this.state.message}</h1>
          <Link to="/login">
            <Button size="sm" variant="outline-primary">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" variant="outline-danger">
              Signup
            </Button>
          </Link>
        </div>
        <ul className="slideshow">
          <li />
          <li />
          <li />
          <li />
        </ul>
      </>
    );
  }
}
