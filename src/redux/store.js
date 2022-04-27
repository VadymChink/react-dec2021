import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";
import usersReducer from "./slices/users.slice";

const rootReducers = combineReducers({
    counter:counterReducer,
    users: usersReducer
});

const store = configureStore({
    reducer: rootReducers
});

export default store;