import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersResponse, AddUserRequest } from "./users/types";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://192.168.2.127:8000/api/" }),
    endpoints: (builder) => ({
        getUsers: builder.query<UsersResponse, void>({
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
    }),
});


export const { useGetUsersQuery, useDeleteUserMutation, useAddUserMutation } = usersApi;