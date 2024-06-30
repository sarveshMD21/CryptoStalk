import { createSlice } from "@reduxjs/toolkit";


const alertSlice=createSlice({
    name:"alert",
    initialState:{isAlert:false},
    reducers:{
        setOpen(state){
            state.isAlert=true
        },
        setClose(state){
            state.isAlert=false
        }
    }

})


export const alertSliceActions=alertSlice.actions;

export default alertSlice;