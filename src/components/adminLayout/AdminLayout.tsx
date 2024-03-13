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
  const { data: session } = useSession();
  const router = useRouter();
  const init = useAppSelector((store) => store.app.init);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session?.user && !init) {
      dispatch(fetchAppData({ role: "admin" }));
    }
    if (session?.user && !router.pathname.startsWith("/admin")) {
      router.push("/admin");
    }
  }, [init, router, session]);

  console.log(init);
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
