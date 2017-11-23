import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import Search from './Search';

class Playlist extends Component {
  // componentWillMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (!user) {
  //       this.props.history.push('/signin');
  //     } else if (user) {
  //       const thisUser = firebase.auth().currentUser;
  //       const uid = thisUser.uid;
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        {this.props.state.playlist.info && (
          <div>
            <h1>{this.props.state.playlist.info.name}</h1>
            <h2>{this.props.state.playlist.info.owner.display_name}</h2>
          </div>
        )}
        <Search />
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

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
