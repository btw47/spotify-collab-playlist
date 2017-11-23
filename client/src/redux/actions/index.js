import actionTypes from '../actionTypes';

export const spotifyAuth = hash => {
  return {
    type: actionTypes.SPOTIFY_AUTH,
    payload: hash
  };
};

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
