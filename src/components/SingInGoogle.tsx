import { Box, Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SingInGoogle = () => {
  return (
    <Box>
      <Button
        onClick={() => {
          signIn("google");
        }}
        variant="contained"
        sx={{
          display: "flex",
          bgcolor: "primary.dark",
          justifyContent: "center",
          mt: 2,
          alignItems: "center",
          gap: 1,
        }}
      >
        <Image
          src={"/google.png"}
          alt="google"
          sizes="100vw"
          width={0}
          height={0}
          style={{ width: "5%", height: "5%" }}
        />
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
          Sign in with Google Provider
        </Typography>
      </Button>
    </Box>
  );
};

export default SingInGoogle;
