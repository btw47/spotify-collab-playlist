import actionTypes from '../actionTypes';

const initialState = {};

export const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
