import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";
import { EIcons } from "enums";

interface IconProps {
  name: EIcons;
  className?: string;
  onClick?: () => void;
}

export const Icon = ({ name, ...props }: IconProps) => {
  return (
    <>
      {
        {
          [EIcons.add]: <AddCircleOutlineIcon {...props} />,
          [EIcons.close]: <CloseIcon {...props} />,
          [EIcons.check]: <CheckIcon {...props} />,
          [EIcons.visibleOn]: <VisibilityIcon {...props} />,
          [EIcons.visibleOf]: <VisibilityOffIcon {...props} />,
          [EIcons.remove]: <DeleteIcon {...props} />,
        }[name]
      }
    </>
  );
};
