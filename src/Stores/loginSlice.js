import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : 'saveUser',
    initialState : [],
    reducers : {
        Signup(state, action){
           // console.log(action);
            //return [...state, action.payload]
            state.push(action.payload);
        }
    }
})

export const {Signup} = loginSlice.actions;
export default loginSlice.reducer;