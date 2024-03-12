import AdminLayout from "@/components/adminLayout/AdminLayout";
import MovieAppLayout from "@/components/moviesLayout/MovieAppLayout";
import NoAuthLayout from "@/components/NoAuthLayout";
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
  const isNoAuthLayout = router.pathname.includes("/");
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

  if (adminPage) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  if (moviePage) {
    return <MovieAppLayout>{children}</MovieAppLayout>;
  }
  if (isNoAuthLayout) {
    return <NoAuthLayout>{children}</NoAuthLayout>;
  }
};

export default Layout;
