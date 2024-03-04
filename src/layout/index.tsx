import AdminLayout from "@/components/adminLayout/AdminLayout";
import MovieAppLayout from "@/components/moviesLayout/MovieAppLayout";
import Navbar from "@/components/Navbar";
import { useAppDispatch } from "@/store/hooks";
import { fetchAppData } from "@/store/slice/appSlice";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const [roleState, setRole] = useState("");
  const router = useRouter();
  const { data: session } = useSession();
  const adminPage = router.pathname.includes("/admin");
  const moviePage = router.pathname.includes("/movies");
  const dispatch = useAppDispatch();
  console.log(session);
  useEffect(() => {
    if (session && session.user) {
      //@ts-ignore
      const { role } = session.user;
      if (role === "ADMIN") {
        if (router.pathname !== "/admin") {
          setRole("admin");
          router.push("/admin");
        }
      } else if (role === "user" && !(router.pathname === "/movies")) {
        setRole("user");
        router.push("/movies");
      }
    }
    if (!session && !(router.pathname === "/")) {
      router.push("/");
    }
  }, [router, session, roleState]);

  useEffect(() => {
    dispatch(fetchAppData({}));
  }, []);

  if (adminPage) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  if (moviePage) {
    return <MovieAppLayout>{children}</MovieAppLayout>;
  }
  return (
    <Box sx={{ height: "100vh", bgcolor: "info.main" }}>
      <Navbar />
    </Box>
  );
};

export default Layout;
