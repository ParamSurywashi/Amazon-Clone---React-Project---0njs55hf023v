import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'saveDataofUser',
    initialState : [],
    reducers : {
        saveUserData(state, action){
            state.push(action.payload);
        }
    }
})

export const {saveUserData} = userSlice.actions;
export default userSlice.reducer;