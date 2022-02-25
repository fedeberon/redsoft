import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
    name: "loginispcube",
    initialState: {
        authenticated: false,
        user: {},
        data: [],
    },
    reducers: {
        authenticated(state, action) {
            state.authenticated = action.payload;
        },
        setUser(state, action){
            state.user = action.payload;
        },
        setData(state, action){
            state.data = action.payload;
        }
    },
});

export {actions as loginispcubeActions};
export {reducer as loginispcubeReducer};