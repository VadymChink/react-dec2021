import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
}

const getALL = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
)

const create = createAsyncThunk(
    'carSlice/update',
    async ({car},{dispatch})=>{
        const {data} = await carService.create(car);
        dispatch(createCar({car:data})) ;
    }
)

const deleteByIdAsync = createAsyncThunk(
    'carSlice/deleteByIdAsync',
    async ({id}, {dispatch}) => {
        await carService.delete(id);
        dispatch(deleteById({id}))
    }
)

const updateByIdAsync = createAsyncThunk(
    'carSlice/updateByIdAsync',
    async ({id, car}) => {
        const {data} = await carService.updateById(id, car);
        return data;
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1)
        },
        createCar:(state,action)=>{
            state.cars.push(action.payload.car)
        },
        carForUpdate:(state,action)=>{
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getALL.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(updateByIdAsync.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id);
                state.cars[index] = {...state.cars[index], ...action.payload}
                state.carForUpdate = false;
            })
    }

});

const {reducer: carReducer, actions: {deleteById,createCar,carForUpdate}} = carSlice;
const carActions = {
    getALL,
    create,
    deleteByIdAsync,
    updateByIdAsync,
    carForUpdate,

}
export default carReducer;

export {
    carActions
}
