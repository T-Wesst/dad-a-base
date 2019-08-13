import React, { Component } from 'react';
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
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
