import { DialogHTMLAttributes } from "react";
export interface IModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    onClose?: () => void,
    className?: string
}