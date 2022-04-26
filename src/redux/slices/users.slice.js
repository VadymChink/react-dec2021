import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const {user} = action.payload
            const [lastUser] = state.users.slice(-1);
            const idUser = lastUser ? lastUser.id + 1 : 1
            const newUser = {id: idUser, user}
            state.users.push(newUser)
        },
        deleteUser: (state, action) => {
            const id = action.payload
            const index = state.users.findIndex(value => value.id===id);
            state.users.splice(index,1)
        }
    }
});
const {reducer: userReducer, actions: {add, deleteUser}} = usersSlice;

export default userReducer;
export const userAction = {
    add,
    deleteUser
}