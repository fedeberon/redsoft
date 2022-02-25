import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
    name: "session",
    initialState: {
        authenticated: false,
        userid: '',
        order: [],
    },
    reducers: {
        authenticated(state, action){
            state.authenticated = action.payload;
        },
        setUserid(state,action){
            state.userid = action.payload;
        },
        setOrder(state, action){
            state.order = action.payload;
        },
    },
});

export {actions as sessionActions};
export {reducer as sessionReducer}