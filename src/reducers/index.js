import websocketReducer from './websocket';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  websocketReducer,
});

export default rootReducer;
