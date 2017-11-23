import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../../redux/actions';

class Dashboard extends Component {
  componentDidMount() {
    const url = window.location.href;
    const access_token = url.split('access_token=')[1].split('&')[0];
    const token_type = url.split('token_type=')[1].split('&')[0];

    const hash = { access_token, token_type };
    this.props.spotifyAuth(hash);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <NavLink to="/Playlist">GO TO PLAYLIST</NavLink>
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
