import actionTypes from '../actionTypes';

const initialState = {};

export const searchPayloadReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PAYLOAD:
      return {
        ...state,
        results: action.payload
      };

    case actionTypes.SEARCH_ERROR:
      return {
        ...state,
        results: action.error
      };
    default:
      return state;
  }
};
