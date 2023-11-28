import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "types/auth";

const initialState: { user: IUser | null } = { user: null };
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }
    }
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;