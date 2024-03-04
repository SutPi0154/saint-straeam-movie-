import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  text: string | ReactNode;
  disabled?: any;
  color?: "success" | "error" | "info" | "warning" | "primary" | "secondary";
  variant: "text" | "contained" | "outlined";
  fullWidth: boolean;
}
const ButtonCompo = ({
  onClick,
  text,
  disabled,
  color,
  variant,
  fullWidth,
}: Props) => {
  return (
    <Button
      sx={{
        fontSize: 16,
        borderRadius: 2,
        py: 1,
        fontWeight: 700,
      }}
      fullWidth={fullWidth}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography
        sx={{
          fontSize: 14,
          borderRadius: 2,
          py: 1,
          fontWeight: 700,
          "&:hover": {
            color: "warning.light",
          },
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default ButtonCompo;
