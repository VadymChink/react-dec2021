import {useReducer} from "react";

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'counter1':
            return {...state, count1: state.count1 + payload}
        case 'counter2':
            return {...state, count2: state.count2 + payload}
        case 'reset1':
            return {...state, count1: 0}
        case 'reset2':
            return {...state, count2: 0}
        case 'set1':
            return {...state, count1: payload}
        case 'set2':
            return {...state, count2: payload}
        default:
            document.write('error')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0});
    return (
        <div>
            <div>
                {state.count1}
                <button onClick={() => dispatch({type: 'counter1', payload: 1})}>inc</button>
                <button onClick={() => dispatch({type: 'counter1', payload: -1})}>dec</button>
                <button onClick={() => dispatch({type: 'reset1'})}>dec</button>
                <button onClick={() => dispatch({type: 'set1', payload: 10})}>set</button>
            </div>
            <div>
                {state.count2}
                <button onClick={() => dispatch({type: 'counter2', payload: 1})}>inc</button>
                <button onClick={() => dispatch({type: 'counter2', payload: -1})}>dec</button>
                <button onClick={() => dispatch({type: 'reset2'})}>dec</button>
                <button onClick={() => dispatch({type: 'set2', payload: 20})}>set</button>
            </div>
        </div>
    );
}

export default App;
