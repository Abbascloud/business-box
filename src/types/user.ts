import { EUserStatus } from "enums";

export type TUser = {
    id: number,
    name: string,
    controller_id: number,
    status: EUserStatus
}
export type TUsers = Array<TUser>

export type AddUserRequest = { name: string }

export type TUsersStore = {
    users: TUsers,
    isLoading: boolean
}