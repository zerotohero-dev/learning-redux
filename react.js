import ReactDOM from 'react-dom';

const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
    <h1>{value}</h1>
    <button onClick={onIncrement} />
    <button onClick={onDecrement} />
    </div>
);

const render = () => {

    // ReactDOM.refs.counter.value = newState

    ReactDOM.render(
        <Counter value={store.getState()} 
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById('root')
    );
};

// Run the render function anytime the state changes.
store.subscribe(render);
