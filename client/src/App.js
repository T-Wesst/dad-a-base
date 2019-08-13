import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {
  state = {
    message: null
  };
  componentDidMount() {
    axios.get('/api/users/visitor').then(response => {
      this.setState({ message: response.data.message });
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
