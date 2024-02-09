import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("session", session);
  useEffect(() => {
    const redirectToAdmin = () => {
      if (
        session &&
        session.user &&
        session.user.email === "nawram@gmail.com"
      ) {
        if (router.pathname !== "/admin") {
          router.push("/admin");
        }
      }
    };

    // Run the redirection logic once on mount
    redirectToAdmin();
  }, [router, session]);

  return (
    <Box sx={{ height: "100vh", bgcolor: "info.main" }}>
      <Navbar />
    </Box>
  );
};

export default Layout;
