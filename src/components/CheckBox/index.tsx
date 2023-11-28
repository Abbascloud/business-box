import React, { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";

import type { ICheckBoxProps } from "./types";
import * as styles from "./styles.module.scss";

export const CheckBox: FC<ICheckBoxProps> = ({ label, ...props }) => {
  const id: string = `check-box-${Math.random()}`;

  return (
    <div className={styles.checkBoxWrapper}>
      <input {...props} className={styles.checkBox} id={id} type="checkbox" />
      <label className={styles.checkBoxLabel} htmlFor={id}>
        <span className={styles.checkIcon}>
          <CheckIcon />
        </span>
      </label>
      <span>{label}</span>
    </div>
  );
};
