import React, { Component } from 'react';
import { firebaseApp } from '../../server/firebase';

class SignUp extends Component {
  state = {};

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { history } = this.props;

    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location = '/home';
      })
      .catch(error => {
        console.log('SIGN UP ERROR', error);
      });
  };

  render() {
    console.log('SIGN UP STATE', this.state);
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            placeholder="email"
            onChange={event => this.handleEmail(event)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={event => this.handlePassword(event)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
