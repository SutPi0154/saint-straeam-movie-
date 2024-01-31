import { Box, Button } from "@mui/material";
import { useState } from "react";
import AuthDialog from "./Auth";

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [variantValue, setVariantValue] = useState("");
  return (
    <Box sx={{ color: "white" }}>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box>
        <Button
          onClick={() => {
            setOpenDialog(true);
            setVariantValue("register");
          }}
        >
          Sign In
        </Button>
      </Box>
      <Box>
        <Button
          onClick={() => {
            setOpenDialog(true);
            setVariantValue("login");
          }}
        >
          Login
        </Button>
      </Box>

      <AuthDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        variantValue={variantValue}
      />
    </Box>
  );
};

export default Navbar;
