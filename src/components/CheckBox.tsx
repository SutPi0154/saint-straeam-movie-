import { Box, Checkbox, Typography } from "@mui/material";
interface Props {
  labelValue: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckBox = ({ labelValue, handleChange }: Props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Checkbox
        color="secondary"
        checked={labelValue}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{ fontSize: 14, color: "warning.light", fontWeight: 600 }}
        >
          I agree to our
        </Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
          Privacy Policy
        </Typography>
        <Typography
          sx={{ fontSize: 14, color: "warning.light", fontWeight: 600 }}
        >
          and
        </Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
          Term & Condition
        </Typography>
      </Box>
    </Box>
  );
};

export default CheckBox;
