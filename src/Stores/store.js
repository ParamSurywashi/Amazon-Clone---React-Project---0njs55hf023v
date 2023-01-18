import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import loginReducer from "./loginSlice";
import userReducer from "./userSlice";
import placeOrderReducer from "./placeOrderSlice";
const store = configureStore({
    reducer :{
        bucket : cartReducer,
        saveUser : loginReducer,
        saveDataofUser : userReducer,
        orderProduct : placeOrderReducer
    }
})

export default store;