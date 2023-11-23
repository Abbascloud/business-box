import React, { FC } from "react";
import type { IButtonProps } from "./types";
import { makeClassNames } from "utils";
import * as styles from "./styles.module.scss";

const cx = makeClassNames(styles);

export const Button: FC<IButtonProps> = ({ className, text, ...props }) => {
  return (
    <button
      className={cx(className, { button: true, disabled: props.disabled })}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
};
