import React, { Component } from 'react';
import axios from 'axios';

export default class Logout extends Component {
  state = {
    message: '',
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get('/api/users/logout')
      .then(res => {
        console.log(res.data.message);
        this.setState({ message: res.data.message });
      })
      .catch(error => {
        console.log(error);
        if (error) this.setState({ error });
      });
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleSubmit}>
          Logout
        </button>
      </div>
    );
  }
}
