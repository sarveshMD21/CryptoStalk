import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";
import alertSlice from "./alert-slice";
import cryptoSlice from "./crypto-slice";


const store=configureStore({
    reducer:{
        toggle: toggleSlice.reducer,
        alert: alertSlice.reducer,
        crypto: cryptoSlice.reducer,
    },
    
    
})

export default store;