import actionTypes from '../actionTypes';

const initialState = {};

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYLIST_INFO:
      return {
        ...state,
        info: action.info
      };
    default:
      return state;
  }
};
