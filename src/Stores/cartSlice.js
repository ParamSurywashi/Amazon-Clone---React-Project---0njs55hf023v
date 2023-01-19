import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'bucket',
    initialState : [],
    reducers : {
        add(state, action){
        
            //return [...state, action.payload]
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter((product)=>{return product.id !== action.payload})
        }
    }
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;