import { api } from "../";
import { AddUserRequest, TUsers, TUser } from "types";
import { setIsLoading } from "store/slices/users";


export const usersApi = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<TUsers, void>({
            query: () => "clients/",
        }),
        addUser: builder.mutation<TUser, AddUserRequest>({
            query: (body) => ({
                url: "clients/",
                method: "POST",
                body,
            }),
            async onQueryStarted({ }, { dispatch, queryFulfilled }) {
                try {
                    dispatch(setIsLoading(true));
                    await queryFulfilled;
                } catch (error) {
                    console.error(error);
                } finally {
                    dispatch(setIsLoading(false));
                }

            }

        }),
        deleteUser: builder.mutation<number, number>({
            query(id) {
                return {
                    url: `clients/${id}`,
                    method: "DELETE",
                };
            },
            async onQueryStarted({ }, { dispatch, queryFulfilled }) {
                try {
                    dispatch(setIsLoading(true));
                    await queryFulfilled;
                } catch (error) {
                    console.error(error);
                } finally {
                    dispatch(setIsLoading(false));
                }

            }
        }),

    })
});

export const { useGetUsersQuery, useDeleteUserMutation, useAddUserMutation } = usersApi;
