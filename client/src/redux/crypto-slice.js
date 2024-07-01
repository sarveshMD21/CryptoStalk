import { createSlice } from "@reduxjs/toolkit";


const cryptoSlice=createSlice({
    name:"crypto",
    initialState: {coins:[]},
    reducers:{
        setCoinData(state,action){
            const coinData=action.payload;
            state.coins=coinData.coins;
        },
        findCoinById(state,action){
            
        }
    }
})

export const cryptoAction=cryptoSlice.actions;

export default cryptoSlice;