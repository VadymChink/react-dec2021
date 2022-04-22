import {useRef} from "react";
import {ADDDog, useHookReducer} from "../../redusers";
import {Dog} from "../Dog/Dog";

const Dogs = () => {
    const name = useRef();

    const [state, dispatch] = useHookReducer();

    const newDog = () => {
        const newDog = name.current.value;
        dispatch({type: ADDDog, payload: {dog: newDog}})
        name.current.value = '';
    }

    return (
        <div>
            <input type="text" ref={name} placeholder={'Dog name'}/>
            <button onClick={() => newDog()}>save</button>
            <div style={{marginTop: "30px"}}>
                {state && state.map((dog) => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
            </div>
        </div>
    );
};

export {
    Dogs
};