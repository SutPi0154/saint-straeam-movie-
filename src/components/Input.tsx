import { Box, InputLabel, OutlinedInput } from "@mui/material";
import { ReactNode } from "react";

interface InputProps {
  id: string;
  onchange: any;
  value: string;
  label: string;
  type?: string;
  autoComplete?: string;
  htmlFor?: string;
  endAdornment?: ReactNode;
}

const Input = ({
  id,
  onchange,
  value,
  label,
  type,
  autoComplete,
  htmlFor,
  endAdornment,
}: InputProps) => {
  return (
    <Box>
      <InputLabel htmlFor={htmlFor} sx={{ color: "secondary.main", mb: 1 }}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={id}
        autoComplete={autoComplete}
        value={value}
        color="secondary"
        type={type}
        endAdornment={endAdornment}
        onChange={onchange}
        placeholder={`enter your ${label}`}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default Input;
