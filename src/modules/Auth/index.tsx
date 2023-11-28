import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { TextField, Button, CheckBox } from "components";
import { useTextMaker, useCapsLookWatcher } from "hooks";
import { makeClassNames } from "utils";

import { ETextFieldTypes } from "enums";
import { EAuthFormFields } from "./enums";
import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "./const";
import type { TAuthForm } from "./types";

import * as styles from "./styles.module.scss";

const cx = makeClassNames(styles);

export const Auth = () => {
  const t = useTextMaker("auth.form");
  const navigate = useNavigate();
  const { handleSubmit, register, control, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: VALIDATION_SCHEMA,
  });

  const { capsLockWarning, capsLookWatcher } = useCapsLookWatcher();

  const onSubmit: SubmitHandler<TAuthForm> = () => {
    sessionStorage.setItem("Zen-Door-Token", String(Math.random()));
    navigate("/");
  };

  return (
    <div className={styles.auth}>
      <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
        <p>{t("title")}</p>
        {Boolean(capsLockWarning) && (
          <p className={cx("authWarning")}>{capsLockWarning}</p>
        )}
        <Controller
          control={control}
          name={EAuthFormFields.email}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <TextField
              {...register("password")}
              value={value}
              name={name}
              type={ETextFieldTypes.text}
              onKeyUp={capsLookWatcher}
              helperText={t("loginHelperText")}
              errorMessage={error?.message}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
          )}
        />
        <Controller
          control={control}
          name={EAuthFormFields.password}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <TextField
              {...register("password")}
              value={value}
              name={name}
              type={ETextFieldTypes.password}
              onKeyUp={capsLookWatcher}
              helperText={t("passwordHelperText")}
              errorMessage={error?.message}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
          )}
        />
        <CheckBox label={t("rememberMe")} />
        <Button text={t("submitButton")} />
      </form>
    </div>
  );
};
