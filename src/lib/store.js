export const createStore = (rootReducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = rootReducer(state, action);
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};
