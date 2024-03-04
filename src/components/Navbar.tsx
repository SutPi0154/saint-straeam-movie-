import { Box, Button, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import AuthDialog from "./auth/Auth";
import Logo from "./Logo";
import ButtonCompo from "./Button";


const Navbar = () => {
  const { data: session, status } = useSession();
  const [openDialog, setOpenDialog] = useState(false);
  const [variant, setVariant] = useState("login");
  const onClickSignUp = () => {
    setOpenDialog(true);
    setVariant("register");
  };
  const onClickLogin = () => {
    setOpenDialog(true);
    setVariant("login");
  };
  return (
    <Box sx={{ mx: 4, pt: 4, flex: "0 0 20vh", height: "20vh" }}>
      <Box
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href={"/"} style={{ color: "white", textDecoration: "none" }}>
          <Box sx={{ display: "flex" }}>
            <Logo />
            <Typography sx={{ fontSize: 25, fontFamily: "Antonio" }}>
              Saint Stream
            </Typography>
          </Box>
        </Link>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>Home</Typography>
          </Box>
          <Box>
            <Typography>About</Typography>
          </Box>
          <Box>
            <Typography>About</Typography>
          </Box>
        </Box>
        {session ? (
          <Box sx={{}}>
            <Button
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <ButtonCompo
              fullWidth={false}
              variant="outlined"
              text="Sign up"
              onClick={onClickSignUp}
            />
            <ButtonCompo
              fullWidth={false}
              variant="contained"
              text="Login"
              onClick={onClickLogin}
            />
          </Box>
        )}

        <AuthDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          variant={variant}
          setVariant={setVariant}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
