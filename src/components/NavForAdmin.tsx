import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
const NavForAdmin = () => {
  return (
    <Box sx={{ width: "80%", alignSelf: "self-start" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", my: 2, mx: 4 }}
      >
        <Box>
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
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider sx={{ width: "95%" }} />
      </Box>
    </Box>
  );
};

export default NavForAdmin;
