import actionTypes from '../actionTypes';
import { firebaseDb } from '../../server/firebase';

//-----SPOTIFY AUTH-----
export const spotifyAuth = hash => {
  return {
    type: actionTypes.SPOTIFY_AUTH,
    payload: hash
  };
};

export const authError = error => {
  return {
    type: actionTypes.AUTH_ERROR,
    error
  };
};

//-----FIREBASE AUTH-----
export const fetchUser = uid => {
  return {
    type: actionTypes.FETCH_USER,
    payload: uid
  };
};

//-----SEARCH RESULTS-----
export const searchPayload = payload => {
  return {
    type: actionTypes.SEARCH_PAYLOAD,
    payload
  };
};

export const searchError = error => {
  return {
    type: actionTypes.SEARCH_ERROR,
    error
  };
};

//-----PLAYLIST INFO-----
export const fetchUserPlaylists = uid => {
  return dispatch => {
    firebaseDb.ref('users/' + uid + '/playlists').on('value', snapshot => {
      const firebaseOutput = snapshot.val();

      const pushList = [];
      for (let playlist in firebaseOutput) {
        pushList.push(playlist);
      }
      console.log('PUSHLIST', pushList);

      const playlistArray = pushList.map(a => {
        const push = [];
        let length = 0;
        for (let prop in firebaseOutput[a]) {
          length += 1;
        }
        push.push(firebaseOutput[a]);
        const lastUpload = push[length - 1];
        return lastUpload;
      });

      console.log('lastUpload', playlistArray);

      dispatch({
        type: actionTypes.FETCH_USER_PLAYLISTS,
        payload: playlistArray
      });
    });
  };
};

export const pushPlaylistInfo = (uid, info) => {
  return dispatch => {
    const date = Date();
    const playlistID = info.id;

    firebaseDb
      .ref('users/' + uid + '/playlists')
      .child(playlistID)
      .push({
        playlistInfo: info,
        date: date
      });

    fetchUserPlaylists(uid);

    dispatch({
      type: actionTypes.NEW_PLAYLIST_INFO,
      info
    });
  };
};
