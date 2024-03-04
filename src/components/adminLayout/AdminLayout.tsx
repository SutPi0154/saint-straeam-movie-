import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (session?.user) {
      dispatch(fetchAppData({ role: "admin" }));
    }
  }, [session, dispatch, router, status]);
  console.log("adim");
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "stretch" }}>
        <Sidebar />
        <Box sx={{ width: "80%", alignSelf: "self-start" }}> {children}</Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;