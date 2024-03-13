import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { ReactNode, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import { useSession } from "next-auth/react";
import { Box } from "@mui/material";
import { fetchAppData } from "@/store/slice/appSlice";

interface Props {
  children: ReactNode;
}
const MovieAppLayout = ({ children }: Props) => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session?.user) {
      dispatch(fetchAppData({ role: "user" }));
    }
  }, [session]);
  console.log("movie layout");

  return (
    <Box sx={{ height: "100vh", bgcolor: "info.main" }}>
      <Navbar />
      <Box> {children}</Box>
    </Box>
  );
};

export default MovieAppLayout;
