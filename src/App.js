import {useReducer} from "react";

const init = (initCounter) => {
    return {count1: initCounter, count2: initCounter}
}

const reduce = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'set':
            return {...state, count1: action.payload}
    }
    switch (action.view) {
        case 'inc':
            return {...state, count2: state.count2 + 1}
        case 'dec':
            return {...state, count2: state.count2 - 1}
        case 'reset':
            return {...state, count2: 0}
        case 'set':
            return {...state, count2: action.payload}
        default:
            return {...state}
    }
}
const App = () => {

    const [state, dispatch] = useReducer(reduce, 0, init);
    return (
        <div>
            <div>{state.count1}
                <button onClick={() => dispatch({type: 'inc'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset'})}>reset</button>
                <button onClick={() => dispatch({type: 'set', payload: 20})}>set</button>
            </div>
            <div>{state.count2}
                <button onClick={() => dispatch({view: 'inc'})}>inc</button>
                <button onClick={() => dispatch({view: 'dec'})}>dec</button>
                <button onClick={() => dispatch({view: 'reset'})}>reset</button>
                <button onClick={() => dispatch({view: 'set', payload: 200})}>set</button>
            </div>
        </div>
    );
};

export default App