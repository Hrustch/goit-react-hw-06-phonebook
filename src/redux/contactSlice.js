import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";



const phoneBookSlice = createSlice({
    name: "defName",
    initialState: initialState,
    reducers:{
        setContact: (state, action)=>{
            state.contacts = action.payload
        },
        setFilter: (state, action)=>{
            state.filter = action.payload
        }        
    }
})


export const phoneBookReducer = phoneBookSlice.reducer
export const {setFilter, setContact} = phoneBookSlice.actions
