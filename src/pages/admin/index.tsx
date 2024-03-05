import ButtonCompo from "@/components/Button";
import { useAppSelector } from "@/store/hooks";
import { Box, Button, Divider, Typography } from "@mui/material";
import MoviePage from "./Movie";
// import Movie from "./Movie";

const AdminPage: any = () => {
  const movies = useAppSelector((store) => store.movie.items);

  console.log(movies, "from admin apge");
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
      <MoviePage />
    </>
  );
};

export default AdminPage;
