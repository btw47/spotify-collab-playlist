import actionTypes from '../actionTypes';

const initialState = {};

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_PLAYLIST_INFO:
      return {
        ...state,
        info: action.info
      };
    case actionTypes.FETCH_USER_PLAYLISTS:
      return {
        ...state,
        user_playlists: action.payload
      };
    default:
      return state;
  }
};
