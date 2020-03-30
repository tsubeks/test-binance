import React from 'react';
import { connect } from 'react-redux';
import { wsConnect, wsDisconnect } from './actions/websocket';

function App({ counter, wsConnect, wsDisconnect }) {
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={wsConnect}>+</button>
      <button onClick={wsDisconnect}>-</button>
    </div>
  );
}

export default connect(({ websocketReducer: { counter } }) => ({ counter }), {
  wsConnect,
  wsDisconnect,
})(App);
