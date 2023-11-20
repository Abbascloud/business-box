import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice  from "modules/Auth/store";
const rootReducer = combineReducers({
    authSlice
});

export const store = configureStore({reducer:rootReducer});

