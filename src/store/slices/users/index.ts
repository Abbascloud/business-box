import { createSlice } from "@reduxjs/toolkit";
import { TUsers } from "types";
import { usersApi } from "api/users";
import { EUserStatus } from "enums";
const initialState: { users: TUsers } = {
    users: [
        { id: 1, name: "Николай", status: EUserStatus.active, controller_id: 1 },
        { id: 2, name: "Николай", status: EUserStatus.active, controller_id: 2 },
        { id: 3, name: "Николай", status: EUserStatus.active, controller_id: 3 },
    ]
};
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            usersApi.endpoints.getUsers.matchFulfilled,
            (state, { payload }) => {
                state.users = payload;
            }
        );
    },
});

export default usersSlice.reducer;
export const { setUsers } = usersSlice.actions;