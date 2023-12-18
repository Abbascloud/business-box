import React, { useEffect } from "react";
import { useDeleteUserMutation } from "api/users";
import { Button, Icon } from "components";
import type { TUsers } from "types";
import { EIcons } from "enums";

import * as styles from "./styles.module.scss";

export const Users = ({ users }: { users: TUsers }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  return (
    <div className={styles.usersWrapper}>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <span>{user.name}</span>
          <Button
            disabled={isLoading}
            onClick={() => {
              deleteUser(user.id);
            }}
            text="удалить"
            rightIcon={() => <Icon name={EIcons.remove} />}
          />
        </div>
      ))}
    </div>
  );
};
