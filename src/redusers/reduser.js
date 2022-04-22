import {useReducer} from "react";
import {ADDCat, ADDDog, DELETE} from "./actions";

const reduser = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADDCat:
            const cat = payload.cat;
            const [lastCat] = state.slice(-1);
            const catId = lastCat ? lastCat.id + 1 : 1;
            return [...state, {id: catId, name: cat}]
        case ADDDog:
            const dog = payload.dog;
            const [lastDog] = state.slice(-1);
            const dogId = lastDog ? lastDog.id + 1 : 1;
            return [...state, {id: dogId, name: dog}]
        case DELETE:
            const id = payload.id;
            const index = state.findIndex(value => value.id === id);
            state.splice(index,1);
            return [...state];
        default:
            console.log('error');

    }
}

const useHookReducer = () => useReducer(reduser, []);

export {
    useHookReducer
}
