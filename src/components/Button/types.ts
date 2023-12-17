import { ButtonHTMLAttributes, ReactElement } from "react";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    rightIcon?: () => ReactElement
}