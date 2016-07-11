const createStore = (reducer) => {
    const state;
    const listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        const state = reducer(state, action);
        
        listeners.forEach((listener) => {
            listener();
        });
    };
   
    const subscribe = (listener) => {
        listeners.push(listener);
        
        return listeners.filter(l => l !== listener);
    };
    
    dispatch({});
    
    return {
        getState,
        dispatch,
        subscribe
    };
};
