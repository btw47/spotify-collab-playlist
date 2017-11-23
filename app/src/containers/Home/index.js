import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';

class Home extends Component {
  handleLogin = event => {
    event.preventDefault();

    const stateKey = 'spotify_auth_state';
    const client_id = 'b9a9f0f395ff421bb874c6bed7c10a05'; // Your client id
    const redirect_uri = 'http://localhost:3000/signin'; // Your redirect uri
    const state = Math.random.toString(3).substring(7);
    localStorage.setItem(stateKey, state);
    const scope =
      'user-read-private user-read-email playlist-modify-private playlist-modify-public';
    let url = 'https://accounts.spotify.com/authorize';

    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    window.location = url;
  };

  render() {
    return (
      <div>
        {/* <button onClick={event => this.handleLogin(event)}>Login</button> */}
        <h1>SPOTIFY AUTH BELOW</h1>
        <button onClick={event => this.handleLogin(event)}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapDispatchToProps)(Home);
