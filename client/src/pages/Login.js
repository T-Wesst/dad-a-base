import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: null
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    this.props.history.push('/dashboard');
    this.setState({ username, password });
    axios
      .post('/api/users/login', { username, password })
      .then(response => {
        console.log(response.data.message);
      })
      .catch(errors => {
        console.log(errors);
        if (errors) this.setState({ errors });
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
