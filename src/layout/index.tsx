import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ height: "100vh", bgcolor: "info.main" }}>
      <Navbar />
    </Box>
  );
};

export default Layout;
