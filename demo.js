
/**
 * This is a reducer.
 * @param state
 * @param action
 * @returns {number}
 */
const counter = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }

    if(action.type === 'DECREMENT') {
        return state - 1;
    }

    return state;
};
