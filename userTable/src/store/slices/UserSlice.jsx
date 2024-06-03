import { createSlice } from "@reduxjs/toolkit" ;

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser( state, action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser( state, action ) {
            console.log("hi" + action.payload);

            state.splice(action.payload, 1);

            // state.pop(action.payload);
            // this will pop the topmost element added
        },
        deleteUsers(state, action) {
            //  console.log("ho rha hai delete ?");

            // return state = [];
            // this is ok but this is not delete, we are assigning [] to state

            return [];
        },
    },
});

console.log(userSlice.actions);

// if action is supposed to be handled by one reducer, use reducers
// if action is supposed to be handles by multiple reducers, use extraReducers
// also learn createAction function.

export default userSlice.reducer ;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;