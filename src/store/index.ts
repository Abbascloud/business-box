import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "store/slices";
import { usersApi } from "api";

const rootReducer = combineReducers({
    auth: authSlice,
    [usersApi.reducerPath]: usersApi.reducer

});

export const store = configureStore({ reducer: rootReducer });

