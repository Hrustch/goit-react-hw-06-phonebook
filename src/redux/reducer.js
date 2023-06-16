import { combineReducers } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./contactSlice";

export const reducer = {
    phoneBook: phoneBookReducer,
}