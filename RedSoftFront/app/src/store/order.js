import {createSlice} from '@reduxjs/toolkit';

const {reducer, actions} = createSlice({

    name: 'order',
    initialState: {
        items: [],
    },
    reducers: {

        addOrder(state, action) {
            for(let i=0; i < state.items.length; i++) {
                if(state.items[i] !== undefined && state.items[i].code === action.payload.code){
                    action.payload.quantity = (Number(state.items[i].quantity)) + (Number(action.payload.quantity))
                    state.items.splice(i, 1, action.payload)
                }
            }
            if (!state.items.includes(action.payload))
                state.items.push(action.payload)
        },

        remove(state, action) {
            let product = null;
            state.items.map((object, index) => object.code === action.payload.code ? product = object : '');
            let indexToDelete = state.items.indexOf(product);
            if (indexToDelete !== -1) {
                delete state.items[indexToDelete]
            }
        },
    }
});

export {actions as ordersActions};
export {reducer as ordersReducer};
