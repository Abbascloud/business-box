import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "store/slices";
const rootReducer = combineReducers({
    auth: authSlice
});

export const store = configureStore({ reducer: rootReducer });

