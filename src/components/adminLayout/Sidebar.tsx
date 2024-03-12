import LoginIcon from "@mui/icons-material/Login";
import { Box, Button, Divider, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../Logo";
import IconButton from "../IconButton";
import PersonIcon from "../PersonIcon";

const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <Box sx={{ width: "15%", height: "100vh" }}>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <Box sx={{ width: "100%" }}>
          <Link href={"/"} style={{ color: "white", textDecoration: "none" }}>
            <Box sx={{ display: "flex", my: 4, mx: 2 }}>
              <Logo />
              <Typography sx={{ fontSize: 25, fontFamily: "Antonio" }}>
                Saint Stream
              </Typography>
            </Box>
          </Link>
          <Divider />
          <Box
            sx={{
              display: "flex",
              my: 2,
              gap: 1,
              mx: 2,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ bgcolor: "" }}>
              <PersonIcon borderRadius="20%" />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 12 }}>Admin</Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  textTransform: "",
                }}
              >
                {session?.user.username}
              </Typography>
            </Box>
            <Box>
              <IconButton
                width="45px"
                height="45px"
                color="primary"
                bgcolor="#111c18"
                Icon={<LoginIcon />}
                onClick={async () => {
                  await signOut();
                  router.push("/");
                }}
              />
            </Box>
          </Box>
          <Divider />
        </Box>
        <Divider orientation={"vertical"} sx={{ height: "100vh" }} />
      </Box>
    </Box>
  );
};

export default Sidebar;
