import React, { useEffect } from "react";

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

  const { handleSubmit, register, control, formState } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: VALIDATION_SCHEMA,
  });
  useEffect(() => {
    console.log(formState);
  }, [formState]);
  const { capsLockWarning, capsLookWatcher } = useCapsLookWatcher();

  const onSubmit: SubmitHandler<TAuthForm> = (data) => console.log(data);
  //Todo добавить функцию показать пароль
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
        <CheckBox />
        <Button disabled={!formState.isValid} text={t("submitButton")} />
      </form>
    </div>
  );
};
