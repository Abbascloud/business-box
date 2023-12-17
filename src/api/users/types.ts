import { EUserStatus } from "./enums";

export type UsersResponse = Array<{
    id: number,
    name: string,
    controller_id: number,
    status: EUserStatus
}>

export type AddUserRequest = { name: string }