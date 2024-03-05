import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  Icon: ReactNode;
  bgcolor: string;
  color: string;
  width: string;
  height: string;
}

const IconButton = ({
  onClick,
  Icon,
  bgcolor,
  color,
  width,
  height,
}: Props) => {
  return (
    <Button
      style={{ maxWidth: `${width}`, minWidth: `${height}` }}
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `${color}`,
        bgcolor: `${bgcolor}`,
        borderRadius: 3,
      }}
    >
      {Icon}
    </Button>
  );
};

export default IconButton;
