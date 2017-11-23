import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import * as actions from '../../redux/actions';

class Dashboard extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.history.push('/');
      } else if (user) {
        const thisUser = firebase.auth().currentUser;
        const uid = thisUser.uid;

        this.props.fetchUser(thisUser.uid);
      }
    });
  }

  // componentDidMount() {
  //   if (!this.props.spotifyAuth.access_token) {
  //     const url = window.location.href;
  //     const access_token = url.split('access_token=')[1].split('&')[0];
  //     const token_type = url.split('token_type=')[1].split('&')[0];
  //     const apiSrc = 'https://api.spotify.com/v1/me';
  //
  //     console.log('URL', url, 'URL END');
  //     console.log('access-token', access_token, 'END');
  //
  //     const { spotifyAuth, authError } = this.props;
  //
  //     axios
  //       .get(apiSrc, {
  //         headers: {
  //           Authorization: `Bearer ${access_token}`
  //         }
  //       })
  //       .then(user_id => {
  //         const hash = { access_token, token_type, user_id };
  //         spotifyAuth(hash);
  //       })
  //       .catch(error => {
  //         authError(error);
  //       });
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <NavLink to="/playlist">ADD TO PLAYLIST</NavLink>
        <br />
        <NavLink to="/create">CREATE A PLAYLIST</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
