import React, { Component } from 'react';
import { firebaseApp } from '../../server/firebase';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import * as actions from '../../redux/actions';

class SignIn extends Component {
  state = {};

  componentDidMount() {
    if (!this.props.spotifyAuth.access_token) {
      const url = window.location.href;
      const access_token = url.split('access_token=')[1].split('&')[0];
      const token_type = url.split('token_type=')[1].split('&')[0];
      const apiSrc = 'https://api.spotify.com/v1/me';

      console.log('URL', url, 'URL END');
      console.log('access-token', access_token, 'END');

      const { spotifyAuth, authError } = this.props;

      axios
        .get(apiSrc, {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
        .then(user_id => {
          const hash = { access_token, token_type, user_id };
          spotifyAuth(hash);
        })
        .catch(error => {
          authError(error);
        });
    }
  }

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

    const redirect = () => {
      this.props.history.push('/dashboard');
    };

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        redirect();
      })
      .catch(error => {
        console.log('SIGN UP ERROR', error);
      });
  };

  render() {
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
          <button type="submit">Sign In</button>
        </form>
        <NavLink to="/signup">or sign up here</NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
