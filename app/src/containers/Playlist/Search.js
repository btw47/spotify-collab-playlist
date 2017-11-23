import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import * as actions from '../../redux/actions';

class Search extends Component {
  componentWillMount() {
    if (!this.props.state.spotifyAuth.access_token) {
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
    }
  }
  handleSearch = event => {
    event.preventDefault();

    const { searchPayload, searchError } = this.props;

    const searchQuery = this.refs.InputBar.value;
    const apiSrc = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&market=US&limit=50&offset=1`;

    axios
      .get(apiSrc, {
        headers: {
          Authorization: `Bearer ${this.props.state.spotifyAuth.access_token}`
        }
      })
      .then(function(payload) {
        searchPayload(payload);
      })
      .catch(error => {
        searchError(error);
      });
  };

  render() {
    const { search } = this.props.state;
    console.log('PLAYLIST PROPS', search.results);
    return (
      <div>
        <form onSubmit={event => this.handleSearch(event)}>
          <input type="text" placeholder="search" ref="InputBar" />
          <button type="submit">Search</button>
        </form>

        {search.results &&
          !search.error && (
            <div>
              {search.results.data.tracks.items.map(a => {
                return (
                  <div key={a.id}>
                    <hr />
                    <img
                      src={a.album.images[0].url}
                      style={{ width: '25vw' }}
                    />
                    <h4>Artist: {a.artists[0].name}</h4>
                    <h4>Song: {a.name}</h4>
                    <h4>Album: {a.album.name}</h4>
                  </div>
                );
              })}
            </div>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
