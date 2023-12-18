import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice, usersSlice } from "store/slices";
import { api } from "api";

const rootReducer = combineReducers({
    auth: authSlice,
    users: usersSlice,
    [api.reducerPath]: api.reducer

});

export const store = configureStore({
    reducer: rootReducer, middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware)
},);

export type RootState = ReturnType<typeof store.getState>