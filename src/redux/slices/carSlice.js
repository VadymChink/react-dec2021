import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    carForUpdate:null
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
    'deleteCarById',
    async ({id}, {dispatch}) => {
        await carsService.deleteById(id);
        dispatch(deleteCarById({id}))
    }
);

const updateAsync = createAsyncThunk(
    'updateAsync',
    async ({id,newCar},{dispatch})=>{
        await carsService.update(id,newCar)
        dispatch(updateCarById({id,newCar}))
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
        },
        carForUpdate: (state, action) => {
            state.carForUpdate = action.payload.carForUpdate
        },
        updateCarById:(state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = { ...state.cars[index], ...action.payload.newCar }
        },
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
    }
});

const {reducer: carReducer, actions: {create, deleteCarById,carForUpdate,updateCarById}} = carSlice;

const carActions = {
    getAll,
    createAsync,
    deleteAsync,
    carForUpdate,
    updateAsync,
}

export default carReducer;

export {
    carActions
}











