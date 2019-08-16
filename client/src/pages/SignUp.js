import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: null
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    const { username, email, password } = this.state;
    event.preventDefault();
    this.props.history.push('/dashboard');
    this.setState({ username, email, password });
    axios
      .post('/api/users/signup', { username, password, email })
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        if (error) {
          console.log(error);
          this.setState({ error });
        }
      });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            id="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
