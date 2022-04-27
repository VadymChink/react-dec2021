import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    updateUser: []
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {user} = action.payload;
            const [lastUser] = state.users.slice(-1);
            const userId = lastUser ? lastUser.id + 1 : 1;
            const newUser = {id: userId, username: user};
            state.users.push(newUser);
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const index = state.users.findIndex(value => value.id === id);
            state.users.splice(index, 1);
        }
    }
});

const {reducer: usersReducer, actions: {add, deleteUser, updateUser}} = usersSlice;

export default usersReducer;
export const userActions = {
    add,
    deleteUser,
    updateUser
}