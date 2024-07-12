// SimpleStopwatch.js
import React, { useReducer, useEffect } from 'react';

const initialState = {
  isRunning: false,
  elapsedTime: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'STOP':
      return { ...state, isRunning: false };
    case 'RESET':
      return { isRunning: false, elapsedTime: 0 };
    default:
      return state;
  }
};

const Watch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;
    if (state.isRunning) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [state.isRunning]);

  return (
    <div>
      <h1>Simple Stopwatch</h1>
      <p>{state.elapsedTime} seconds</p>
      <button onClick={() => dispatch({ type: 'START' })} disabled={state.isRunning}>Start</button>
      <button onClick={() => dispatch({ type: 'STOP' })} disabled={!state.isRunning}>Stop</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Watch;
