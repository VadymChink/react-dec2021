import {combineReducers, configureStore} from "@reduxjs/toolkit";

import carsReducer from "./slices/cars.slice";

const rootReducer = combineReducers({
    cars: carsReducer
})

const store = configureStore({
    reducer:rootReducer
});

export default store;