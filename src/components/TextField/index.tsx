import React, { forwardRef } from "react";

import { IsVisibleIcon } from "./components";
import { makeClassNames } from "utils";
import { ETextFieldTypes } from "enums";
import type { ITextFieldProps } from "./types";
import { useToggle } from "hooks";

import * as styles from "./styles.module.scss";

const cx = makeClassNames(styles);

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  function TextField(
    {
      errorMessage,
      helperText,
      className,
      type = ETextFieldTypes.text,
      ...defaultInputProps
    },
    ref
  ) {
    const [isVisible, toggleVisiblePassword] = useToggle(false);

    const makeType = () => {
      switch (type) {
        case ETextFieldTypes.text:
          return type;
        case ETextFieldTypes.password:
          return isVisible ? ETextFieldTypes.text : ETextFieldTypes.password;
        default:
          return type;
      }
    };
    return (
      <div className={cx("input", className)}>
        {Boolean(helperText) && (
          <p className={styles.inputHelperText}>{helperText}</p>
        )}
        <div
          className={cx({
            inputTextFieldWrapper: true,
            inputErrorBorder: Boolean(errorMessage),
          })}
        >
          <input
            ref={ref}
            className={cx({ inputTextField: true })}
            {...defaultInputProps}
            type={makeType()}
          />
          {type === ETextFieldTypes.password && (
            <IsVisibleIcon
              isVisible={isVisible}
              toggleVisiblePassword={toggleVisiblePassword}
            />
          )}
        </div>
        {Boolean(errorMessage) && (
          <p className={styles.inputErrorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);
