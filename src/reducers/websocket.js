import {
  WS_CONNECT,
  WS_CONNECTING,
  WS_CONNECTED,
  WS_DISCONNECT,
  WS_DISCONNECTED,
} from '../constants/actionTypes';

const initialState = {
  counter: 0,
};

const websocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECT:
      return {
        counter: state.counter + 1,
      };
    case WS_DISCONNECT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default websocketReducer;
