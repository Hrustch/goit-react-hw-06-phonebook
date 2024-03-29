import { createSlice } from "@reduxjs/toolkit";

const initialState = {contacts:[], filter:""}

const phoneBookSlice = createSlice({
    name: "defName",
    initialState: initialState,
    reducers:{
        addContact: (state, action) => {
            state.contacts.push(action.payload);
          },
      
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
        },
        setFilter: (state, action)=>{
            state.filter = action.payload
        }        
    }
})


export const phoneBookReducer = phoneBookSlice.reducer
export const {setFilter, addContact, removeContact} = phoneBookSlice.actions