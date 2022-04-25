import {useRef} from "react";
import {ADDDog, useHookReducer} from "../../reducers";
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
            <button onClick={() => newDog()}>Save</button>
            {state.dogs.map((dog) => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {
    Dogs
};