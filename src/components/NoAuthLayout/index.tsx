import { Box } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import { fetchAppData } from "@/store/slice/appSlice";
import { useAppDispatch } from "@/store/hooks";
interface Props {
  children: ReactNode;
}
const NoAuthLayout = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("hi form layout");
    dispatch(fetchAppData({ role: "user" }));
  }, []);
  return (
    <Box sx={{ height: "100vh", bgcolor: "info.main" }}>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default NoAuthLayout;
