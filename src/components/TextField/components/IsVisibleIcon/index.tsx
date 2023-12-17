import React from "react";
import { Icon } from "components";
import { EIcons } from "enums";
export const IsVisibleIcon = ({
  isVisible,
  toggleVisiblePassword,
}: {
  isVisible: boolean;
  toggleVisiblePassword: () => void;
}) => {
  return isVisible ? (
    <Icon name={EIcons.visibleOf} onClick={toggleVisiblePassword} />
  ) : (
    <Icon name={EIcons.visibleOn} onClick={toggleVisiblePassword} />
  );
};
