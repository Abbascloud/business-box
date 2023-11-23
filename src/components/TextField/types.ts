import { InputHTMLAttributes } from "react";
import { ETextFieldTypes } from "enums";
export interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    isDisabled?: boolean,
    errorMessage?: string,
    helperText?: string,
    type?: ETextFieldTypes
}