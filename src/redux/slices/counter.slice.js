import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter1: 0,
    counter2: 0
}

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        inc1: state => {
            state.counter1 += 1
        },
        dec1: state => {
            state.counter1 -= 1
        },
        reset1: (state, action) => {
            state.counter1 = action.payload || 0
        }
    }
});

const {reducer:counterReducer,actions:{inc1,dec1,reset1}} = counterSlice;

export default counterReducer;
export const counterActions={
    dec1,inc1,reset1
}