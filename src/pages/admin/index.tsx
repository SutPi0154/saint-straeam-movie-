import ButtonCompo from "@/components/Button";
import { useAppSelector } from "@/store/hooks";
import { Box, Divider, Typography } from "@mui/material";
import MoviePage from "./Movie";
import { useRouter } from "next/router";
import NavForAdmin from "@/components/adminLayout/NavForAdmin";

const AdminPage: any = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    const subRoute = "Add-item";
    router.push(`/admin/${subRoute}`);
  };

  return (
    <>
      <NavForAdmin
        title={"DashBoard"}
        buttonText={"Add Item"}
        button={() => handleButtonClick()}
      />
      <MoviePage />
    </>
  );
};

export default AdminPage;
