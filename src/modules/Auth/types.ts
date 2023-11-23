import { EAuthFormFields } from "./enums";
export type TAuthForm = {
    [key in EAuthFormFields]: string;
};