import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

const User = () => {
  const { data: session } = useSession();

  return <Box sx={{}}></Box>;
};

export default User;
