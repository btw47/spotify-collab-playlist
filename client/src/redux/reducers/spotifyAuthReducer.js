import actionTypes from '../actionTypes';

//INITIAL STATE FOR USE WITH SPOTIFY API
const initialState = {
  access_token: null,
  token_type: null
};

export const spotifyAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SPOTIFY_AUTH:
      return {
        ...state,
        access_token: action.payload.access_token,
        token_type: action.payload.token_type
      };
    default:
      return state;
  }
};
