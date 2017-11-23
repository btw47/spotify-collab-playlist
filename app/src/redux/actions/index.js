import actionTypes from '../actionTypes';

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
export const fetchPlaylistInfo = info => {
  return {
    type: actionTypes.PLAYLIST_INFO,
    info
  };
};
