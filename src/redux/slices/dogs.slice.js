import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    dogForUpdate: null
}

const dogsSlice = createSlice({
    name: 'dogsSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const [lastDog] = state.dogs.slice(-1)
            const dogId = lastDog ? lastDog.id + 1 : 1
            const {dog} = action.payload
            const newDog = {id: dogId, dogName: dog}
            state.dogs.push(newDog);
        },
        delDog: (state, action) => {
            const {id} = action.payload
            const index = state.dogs.findIndex(value => value.id === id)
            state.dogs.splice(index, 1);
        },
        setDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dog
        },
        update: (state, action) => {
            const {id, name} = action.payload
            const index = state.dogs.findIndex(value => value.id === id)
            state.dogs[index].dogName = name
            state.dogForUpdate = false
        }

    }
});

const {reducer: dogsReducer, actions: {add, delDog,setDogForUpdate,update}} = dogsSlice;

export default dogsReducer;
export const dogsActions = {
    add, delDog,setDogForUpdate,update
}