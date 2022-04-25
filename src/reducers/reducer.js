import {useReducer} from "react";

import {ADDCat, ADDDog, DELETECat, DELETEDog} from './action';

const reducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADDCat:
            const cat = payload.cat
            const [lastCat] = state.cats.slice(-1);
            const idCat = lastCat ? lastCat.id + 1 : 1;
            return {...state, cats: [...state.cats, {id: idCat, name: cat}]}
        case ADDDog:
            const dog = payload.dog
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog ? lastDog.id + 1 : 1
            return {...state, dogs: [...state.dogs, {id: idDog, name: dog}]}
        case DELETECat:
            const catId = payload.id
            const index = state.cats.findIndex(cat => cat.id === catId);
            state.cats.splice(index, 1)
            return {...state}
        case DELETEDog:
            const dogId = payload.id
            const findIndex = state.dogs.findIndex(dog => dog.id === dogId);
            state.dogs.splice(findIndex, 1)
            return {...state}
        default:
            return {state}
    }
}

const useHookReducer = () => useReducer(reducer, {cats: [], dogs: []});

export {
    useHookReducer
}

