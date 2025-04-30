import React from "react";

const initialState = {count :0}

const UseReducerHook = () => {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            default:
                throw new Error();
        }
    }, initialState);

    return (
        <div className="UseReducerHook">
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </div>
    );

}

export default UseReducerHook;