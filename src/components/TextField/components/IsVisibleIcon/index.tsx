import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const IsVisibleIcon = ({
  isVisible,
  toggleVisiblePassword,
}: {
  isVisible: boolean;
  toggleVisiblePassword: () => void;
}) => {
  return isVisible ? (
    <VisibilityOffIcon onClick={toggleVisiblePassword} />
  ) : (
    <VisibilityIcon onClick={toggleVisiblePassword} />
  );
};
