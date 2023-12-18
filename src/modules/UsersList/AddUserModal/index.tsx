import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, Modal, TextField } from "components";

import { AddUserModalProps, TAddUserConfig } from "../types";
import { DEFAULT_VALUES, VALIDATION_SCHEMA } from "../const";
import { ETextFieldTypes } from "enums";
import { EAddUserForm } from "../enums";
import { useTextMaker } from "hooks";

import * as styles from "./styles.module.scss";
import { useAddUserMutation } from "api/users";

export const AddUserModal = ({ isOpen, setIsOpen }: AddUserModalProps) => {
  const t = useTextMaker("userList.addUserForm");
  const { handleSubmit, control } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: VALIDATION_SCHEMA,
  });
  const [addUser] = useAddUserMutation();

  const onSubmit: SubmitHandler<TAddUserConfig> = (values) => {
    addUser(values);
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h4>{t("title")}</h4>
        <Controller
          control={control}
          name={EAddUserForm.name}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <TextField
              value={value}
              name={name}
              type={ETextFieldTypes.text}
              helperText={t("nameHelper")}
              errorMessage={error?.message}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
          )}
        />
        <Button className={styles.button} text={t("submitButton")} />
      </form>
    </Modal>
  );
};
