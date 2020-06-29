# Your state management library code should be here


# state management library 

 This is a function that returns the latest state from the store.
    const getState = () => state;

  This is a function that takes an action as a parameter It feeds that action and the currentState to Reducer to get a new state.
  const dispatch = action => {
    state = rootReducer(state, action);
    listeners.forEach(listener => listener(state));
  };


  This is a function that lets you be notified when the store receives an action
  const subscribe = listener => {
    listeners.push(listener);
  };

  
  expose these api's to get state, dispatch actions and subscribe to store
    return { getState, dispatch, subscribe };