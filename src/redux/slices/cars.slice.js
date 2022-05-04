import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    deleteCar: null,
    status: null,
    updatedCar: null,
    formErrors: {}
}

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await carsService.getAll();
        return data
    }
);

const deleteById = createAsyncThunk(
    'deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.deleteById(id)
            dispatch(deleteCarById({id}))
        } catch (e) {
            rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)
const createCar = createAsyncThunk(
    'createCar',
    async ({car}, {dispatch,rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            dispatch(createNewCar({car: data}))
        } catch (e) {
           return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)
const updateById = createAsyncThunk(
    'createCar',
    async ({id, newCar}, {dispatch}) => {
        await carsService.updateById(id, newCar);
        dispatch(updateCarById({id, car: newCar}))
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index, 1)
            state.deleteCar = action.payload.id
        },
        createNewCar: (state, action) => {
            state.cars.push(action.payload.car)
        },
        updatedCar: (state, action) => {
            state.updatedCar = action.payload.car
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(value => value.id === action.payload.id)
            state.cars[index] = {...state.cars[index], ...action.payload.car}
            state.updatedCar = false;
        }
    },
    extraReducers: {
        [getAll.pending]: (state) => {
            state.status = 'loading'
        },
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload
            state.status = 'fulfilled'
        },
        [getAll.rejected]: (state) => {
            state.status = 'rejected'
        },
        [createCar.rejected]:(state,action)=>{
            const {status,formErrors} = action.payload;
            state.status =  status;
            state.formErrors =  formErrors;

        }
    }
});

const {reducer: carsReducer, actions: {deleteCarById, createNewCar, updateCarById, updatedCar}} = carsSlice;

const carsActions = {
    getAll,
    deleteById,
    createCar,
    updateById,
    updatedCar,
};

export default carsReducer;

export {
    carsActions
};

