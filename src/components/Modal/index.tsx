import React, { FC } from "react";
import { IModalProps } from "./types";
import { useOutsideClick } from "hooks";
import { makeClassNames } from "utils";
import { Icon } from "components";
import { EIcons } from "enums";
import * as styles from "./styles.module.scss";

const cx = makeClassNames(styles);

export const Modal: FC<IModalProps> = ({
  children,
  isOpen,
  setIsOpen,
  onClose,
  className,
  ...props
}) => {
  const close = () => {
    setIsOpen(false);
    onClose?.();
  };
  const ref = useOutsideClick<HTMLDialogElement>(close);

  return (
    <>
      {isOpen && (
        <div className={styles.dialogWrapper}>
          <dialog
            className={cx(className, "dialog")}
            ref={ref}
            open={isOpen}
            {...props}
          >
            <Icon
              name={EIcons.close}
              onClick={close}
              className={styles.dialogCloseIcon}
            />
            <div>{children}</div>
          </dialog>
        </div>
      )}
    </>
  );
};
