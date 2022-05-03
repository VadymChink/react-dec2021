import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    status: null,
}

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await carsService.getAll();
        return data;
    }
);

const createAsync = createAsyncThunk(
    'create',
    async ({car}, {dispatch}) => {
        const {data} = await carsService.create(car);
        dispatch(create({car: data}))
    }
);

const deleteAsync = createAsyncThunk(
    'delete',
    async ({id}, {dispatch}) => {
        await carsService.deleteById(id);
        dispatch(deleteById({id}))
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCarById:(state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1);
        }
    },
    extraReducers: {
        [getAll.pending]: (state) => {
            state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAll.rejected]: (state) => {
            state.status = 'rejected'
        },
        // [createAsync.fulfilled]:(state,action)=>{
        //     state.cars.push(action.payload)
        // },
    }
});

const {reducer: carReducer, actions: {create, deleteById}} = carSlice;

const carActions = {
    getAll,
    createAsync,
    deleteAsync,
}

export default carReducer;

export {
    carActions
}











