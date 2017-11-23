import { combineReducers } from 'redux';

import { spotifyAuthReducer } from './spotifyAuthReducer';
import { searchPayloadReducer } from './searchPayloadReducer';
import { playlistReducer } from './playlistReducer';
import { fetchUserReducer } from './fetchUserReducer';

const rootReducer = combineReducers({
  spotifyAuth: spotifyAuthReducer,
  search: searchPayloadReducer,
  playlist: playlistReducer,
  firebase: fetchUserReducer
});

export default rootReducer;
