import { createSlice } from "@reduxjs/toolkit";
import { TUsersStore } from "types";
import { usersApi } from "api/users";
import { EUserStatus } from "enums";
const initialState: TUsersStore = {
    users: [
        { id: 1, name: "Николай", status: EUserStatus.active, controller_id: 1 },
        { id: 2, name: "Николай", status: EUserStatus.active, controller_id: 2 },
        { id: 3, name: "Николай", status: EUserStatus.active, controller_id: 3 },
    ],
    isLoading: false
};
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            usersApi.endpoints.getUsers.matchFulfilled,
            (state, { payload }) => {
                state.users = payload;
            }
        );
        builder.addMatcher(
            usersApi.endpoints.deleteUser.matchFulfilled,
            (state, { payload }) => {
                state.users = state.users.filter((user) => user.id !== payload);
            }
        );
        builder.addMatcher(
            usersApi.endpoints.addUser.matchFulfilled,
            (state, { payload }) => {
                state.users = [...state.users, payload];
            }
        );
    },
});

export default usersSlice.reducer;
export const { setUsers, setIsLoading } = usersSlice.actions;