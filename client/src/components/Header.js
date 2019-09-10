import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <ul>
        <Link to="/dashboard">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/logout">Logout</Link>
      </ul>
    </div>
  );
}
