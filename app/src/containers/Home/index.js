import React, { Component } from 'react';

class Home extends Component {
  handleLogin = event => {
    event.preventDefault();

    const stateKey = 'spotify_auth_state';
    const client_id = 'b9a9f0f395ff421bb874c6bed7c10a05'; // Your client id
    const redirect_uri = 'http://localhost:3000/dashboard'; // Your redirect uri
    const state = Math.random.toString(3).substring(7);
    localStorage.setItem(stateKey, state);
    const scope = 'user-read-private user-read-email';
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
        <button onClick={event => this.handleLogin(event)}>Login</button>
      </div>
    );
  }
}

export default Home;
