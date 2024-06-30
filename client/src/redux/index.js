import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";
import alertSlice from "./alert-slice";


const store=configureStore({
    reducer:{
        toggle: toggleSlice.reducer,
        alert: alertSlice.reducer,
    },
    
    
})

export default store;