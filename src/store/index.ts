import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "store/slices";
const rootReducer = combineReducers({
    authSlice
});

export const store = configureStore({ reducer: rootReducer });

