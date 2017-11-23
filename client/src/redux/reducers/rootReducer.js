import { combineReducers } from 'redux';

import { spotifyAuthReducer } from './spotifyAuthReducer';
import { searchPayloadReducer } from './searchPayloadReducer';

const rootReducer = combineReducers({
  spotifyAuth: spotifyAuthReducer,
  search: searchPayloadReducer
});

export default rootReducer;
