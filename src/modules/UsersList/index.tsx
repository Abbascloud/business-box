import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useGetUsersQuery } from "api/users";
import { EIcons } from "enums";
import { Button, Loader, Icon } from "components";
import { AddUserModal } from "./AddUserModal";
import { Users } from "./Users";
import type { RootState } from "store";
import type { TUsersStore } from "types";

import * as styles from "./styles.module.scss";

export const UserList = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const { isFetching } = useGetUsersQuery();

  const { users, isLoading } = useSelector<RootState, TUsersStore>(
    (state) => state.users
  );

  return (
    <Loader isFixed={true} isLoading={isFetching || isLoading}>
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
