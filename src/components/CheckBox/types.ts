import { InputHTMLAttributes } from "react";
export interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    isDisabled?: boolean,
    errorMessage?: string,
    label?: string,
    helperText?: string,
    type?: "text"
}