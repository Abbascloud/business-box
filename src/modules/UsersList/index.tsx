import React, { useState } from "react";
import { Icon } from "components";
// import { UsersResponse } from "api/users/types";
// import { EUserStatus } from "api/users/enums";
import { EIcons } from "enums";
import { Button, Loader } from "components";
import { AddUserModal } from "./AddUserModal/AddUserModal";

// const users: UsersResponse = [
//   { id: 1, name: "Николай", status: EUserStatus.active, controller_id: 1 },
//   { id: 2, name: "Николай", status: EUserStatus.active, controller_id: 2 },
//   { id: 3, name: "Николай", status: EUserStatus.active, controller_id: 3 },
// ];

export const UserList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Loader isFixed={true} isLoading={false}>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
        text="Добавить"
        rightIcon={() => <Icon name={EIcons.add} />}
      />
      <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Loader>
  );
};
