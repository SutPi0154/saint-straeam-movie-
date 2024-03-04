import ButtonCompo from "@/components/Button";
import { Box, Button, Divider, Typography } from "@mui/material";

const AdminPage = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", my: 2, mx: 4 }}
      >
        <Box>
          <Typography sx={{ fontSize: 30 }}>Dashboard</Typography>
        </Box>
        <Box>
          <ButtonCompo
            text="Add Item"
            variant="contained"
            onClick={() => {}}
            fullWidth={false}
          />
        </Box>
      </Box>
      <Divider sx={{ width: "95%" }} />

      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        <Box
          sx={{
            display: "flex",
            bgcolor: "warning.main",
            borderColor: "",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ width: "20%", height: 50, bgcolor: "" }}>dfsdfaflj</Box>
          <Box sx={{ width: "20%", height: 50, bgcolor: "red" }}>dfsdfaflj</Box>
          <Box sx={{ width: "20%", height: 50, bgcolor: "red" }}>dfsdfaflj</Box>
          <Box sx={{ width: "20%", height: 50, bgcolor: "red" }}>dfsdfaflj</Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminPage;
