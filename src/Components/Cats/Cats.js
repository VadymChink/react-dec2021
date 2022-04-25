import {useRef} from "react";

import {Cat} from "../Cat/Cat";
import {ADDCat} from '../../reducers';
import {useHookReducer} from "../../reducers";

const Cats = () => {

    const [state, dispatch] = useHookReducer();

    const name = useRef();

    const saveCat = () => {
        const newCat = name.current.value;
        dispatch({type: ADDCat, payload: {cat:newCat}});
        name.current.value = '';
    }

    return (
        <div>
            <input type="text" ref={name} placeholder={'Cat name'}/>
            <button onClick={() => saveCat()}>Save</button>
            {state.cats.map(value => <Cat key={value.id} cat={value} dispatch={dispatch}/>)}
        </div>
    );
};

export {
    Cats
};