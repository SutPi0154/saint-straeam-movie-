import AdminLayout from "@/components/AdminLayout";
import Navbar from "@/components/Navbar";
import User from "@/pages/userPanel";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const [admin, setAdmin] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession();
  const adminPage = router.pathname.includes("/admin");

  useEffect(() => {
    if (session && session.user) {
      //@ts-ignore
      const { role } = session.user;
      if (role === "ADMIN") {
        if (router.pathname !== "/admin") {
          setAdmin(true);
          router.push("/admin");
        } else {
          setAdmin(false);
        }
      }
    }
    if (!session && !(router.pathname === "/")) {
      router.push("/");
    }
  }, [router, session, admin]);

  if (adminPage) {
    return <AdminLayout>{children}</AdminLayout>;
  } else {
    return (
      <Box sx={{ height: "100vh", bgcolor: "info.main" }}>
        <Navbar />
        {children}
      </Box>
    );
  }
};

export default Layout;
