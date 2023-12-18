import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useGetUsersQuery, useAddUserMutation } from "api/users";
import { EIcons } from "enums";
import { Button, Loader, Icon } from "components";
import { AddUserModal } from "./AddUserModal";
import { Users } from "./Users";
import type { RootState } from "store";
import type { TUsers } from "types";

import * as styles from "./styles.module.scss";

export const UserList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading: isInitialLoading } = useGetUsersQuery();
  const [, { isLoading }] = useAddUserMutation();
  const users = useSelector<RootState, TUsers>((state) => state.users.users);

  return (
    <Loader isFixed={true} isLoading={isInitialLoading || isLoading}>
      <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.wrapper}>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          text="Добавить"
          rightIcon={() => <Icon name={EIcons.add} />}
        />
        <Users users={users} />
      </div>
    </Loader>
  );
};
