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
  console.log(session);
  const isNoAuthLayout = router.pathname.includes("/");
  useEffect(() => {
    if (session) {
      // @ts-ignore
      const roleResult = session.user.role;
      const role = roleResult.toUpperCase();
      console.log(role);
      if (!session && !(router.pathname === "/")) {
        router.push("/");
      } else if (role === "ADMIN") {
        setRole("admin");
      }
      if (role === "ADMIN" && !router.pathname.startsWith("/admin")) {
        router.push("/admin");
      } else if (role === "USER") {
        setRole("user");
      }
      if (role === "USER" && router.pathname !== "/movies") {
        console.log("route to movies");
        router.push("/movies");
      }
    }
  }, [router, session, roleState]);

  console.log("rolestate", roleState);

  if (roleState === "admin") {
    return <AdminLayout>{children}</AdminLayout>;
  }
  if (roleState === "user") {
    return <MovieAppLayout>{children}</MovieAppLayout>;
  }
  if (isNoAuthLayout) {
    return <NoAuthLayout>{children}</NoAuthLayout>;
  }
};

export default Layout;
