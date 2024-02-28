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
          <Button
            variant="contained"
            sx={{
              fontSize: 14,
              borderRadius: 2,
              py: 1,
              fontWeight: 700,
              "&:hover": {
                color: "warning.light",
              },
            }}
          >
            Add Item
          </Button>
        </Box>
        {/* <Box>
          <Box>
            <Typography sx={{ fontSize: 25, fontFamily: "Antonio", mb: 1 }}>
              Catalog
            </Typography>
            <Typography sx={{ fontSize: 14, color: "warning.main" }}>
              {" "}
              14 452 total
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box>
            <Typography sx={{ fontSize: 14, color: "warning.main" }}>
              Sort by:
            </Typography>
            <Box>
              <Typography>Date created</Typography>
            </Box>
          </Box>
          <Box>
            <Paper
              component="form"
              sx={{
                p: "4px 4px",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find movie / tv series"
                inputProps={{ "aria-label": "Find movie / tv series" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Box> */}
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
