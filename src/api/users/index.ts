import { api } from "../";
import { AddUserRequest, TUsers } from "types";

export const usersApi = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<TUsers, void>({
            query: () => "clients/",
        }),
        addUser: builder.mutation<void, AddUserRequest>({
            query: (body) => ({
                url: "clients/",
                method: "POST",
                body,
            }),
        }),
        deleteUser: builder.mutation<void, number>({
            query(id) {
                return {
                    url: `clients/${id}`,
                    method: "DELETE",
                };
            },
        }),
    })
});

export const { useGetUsersQuery, useDeleteUserMutation, useAddUserMutation } = usersApi;
