import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import * as actions from '../../redux/actions';

class CreatePlaylist extends Component {
  componentWillMount() {
    if (!this.props.state.spotifyAuth.access_token) {
      const stateKey = 'spotify_auth_state';
      const client_id = 'b9a9f0f395ff421bb874c6bed7c10a05'; // Your client id
      const redirect_uri = 'http://localhost:3000/signin'; // Your redirect uri
      const state = Math.random.toString(3).substring(7);
      localStorage.setItem(stateKey, state);
      const scope =
        'user-read-private user-read-email playlist-modify-private playlist-modify-public playlist-read-collaborative';
      let url = 'https://accounts.spotify.com/authorize';

      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state);
      window.location = url;
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { pushPlaylistInfo } = this.props;

    const user_id = this.props.state.spotifyAuth.userId.data.id;
    const apiSrc = `https://api.spotify.com/v1/users/${user_id}/playlists`;
    const playlistName = this.refs.PlaylistName.value;
    const playlistDescription = this.refs.PlaylistDescription.value;
    const access_token = this.props.state.spotifyAuth.access_token;
    const firebase_uid = this.props.state.firebase.user;

    axios({
      method: 'post',
      url: apiSrc,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      },
      data: {
        name: playlistName,
        public: false,
        collaborative: true,
        description: playlistDescription
      }
    })
      .then(res => {
        pushPlaylistInfo(firebase_uid, res.data);
      })
      .then(() => {
        this.props.history.push('/playlist');
      })
      .catch(err => {
        console.log('ERROR', err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" ref="PlaylistName" placeholder="playlist name" />
          <input
            type="text"
            ref="PlaylistDescription"
            placeholder="playlist description"
          />
          <button type="submit">Create Playlist</button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
