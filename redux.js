// The store binds together the three principles of redux.
import {createStore} from 'redux';

const counter = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }

    if(action.type === 'DECREMENT') {
        return state - 1;
    }

    return state;
};

const store = createStore(counter);

console.log(store.getState());

const render = () => {
    document.body.innerText = store.getState();
};

render();

store.dispatch({type: 'INCREMENT'});

store.subscribe(render);

document.addEventListener('click', () => store.dispatch({type: 'INCREMENT'}));
