import {useRef} from "react";
import {ADDCat, useHookReducer} from "../../redusers";
import {Cat} from "../Cat/Cat";

const Cats = () => {
    const name = useRef();

    const [state, dispatch] = useHookReducer();

    const newCat = () => {
        const newCat = name.current.value;
        dispatch({type: ADDCat, payload: {cat: newCat}})
        name.current.value = '';
    }

    return (
        <div>
            <input type="text" ref={name} placeholder={'Cat name'}/>
            <button onClick={() => newCat()}>save</button>
            {state && state.map((cat) => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {
    Cats
};