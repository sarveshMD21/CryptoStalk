import {createSlice} from '@reduxjs/toolkit';


const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        dark: 0,
        navbar: false
    },
    reducers:{
        toggleDarkMode(state){
            state.dark=1-state.dark;
        },
        toggleNavbar(state){
            state.navbar=!state.navbar;
        }
    }
})

export const toggleAction=toggleSlice.actions;


export default toggleSlice;