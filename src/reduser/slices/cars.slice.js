import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
}

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await carsService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(
    'create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        }
    },
    extraReducers: {
        [getAll.pending]: (state) => {
            state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload;
        },
        [getAll.rejected]: (state) => {
            state.status = 'rejected'
        },
        [createAsync.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status;
            state.formErrors = formErrors;
        }
    }
});

const {reducer: carsReducer, actions: {create}} = carSlice;

const carsActions = {
    getAll,
    createAsync,
}

export default carsReducer;

export {carsActions}
