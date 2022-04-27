import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    catForUpdate:null
}

const catsSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {cat} = action.payload;
            const [lastCat]=state.cats.slice(-1)
            const catId = lastCat ? lastCat.id + 1 : 1
            const newCat = {id: catId, nameCat: cat};
            state.cats.push(newCat);
        },
        delCat:(state, action) => {
            const {id} = action.payload;
            const index = state.cats.findIndex(value => value.id ===id);
            state.cats.splice(index,1)
        },
        setCatFor:(state,action)=>{
            state.catForUpdate = action.payload.cat
        },
        updateCat: (state,action)=>{
            const {id, name} = action.payload
            const index = state.cats.findIndex(value => value.id===id)
            state.cats[index].nameCat = name
            state.catForUpdate = false
        }

    }
});

const {reducer: catsReducer, actions: {add,delCat,setCatFor,updateCat}} = catsSlice;

export default catsReducer;
export const catAction = {
    add,delCat,setCatFor,updateCat
}
