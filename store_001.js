const counter = (state = 0, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
}

const { createStore } = Redux;

// The store binds together the three principles of Redux:
// * It holds the current application state object.
// * It lets you dispatch actions.
// * You need to specify a reducer in the constructor.
const store = createStore(counter);

const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});
