import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  Box,
  Button,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import React, { useEffect } from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Genre, Movie, MovieGenres } from "@prisma/client";
import IconButton from "@/components/IconButton";
import { paginationPage } from "@/store/slice/movieSlice";

interface MovieWithGenres {
  movie: Movie;
  genres: Genre[];
}
const MoviePage = () => {
  const movies = useAppSelector((store) => store.movie.items);
  const movieGenres = useAppSelector((store) => store.movieGenres.items);
  const genres = useAppSelector((store) => store.genre.items);
  const dispatch = useAppDispatch();
  const totalPages = useAppSelector((state) => state.movie.totalPages);
  const [page, setPage] = React.useState(1);

  // const handleChange = (event: React.ChangeEvent<unknown>, newPage: any) => {
  //   setPage(newPage); // Update the local state
  //   dispatch(paginationPage({ page, pageSize: 2 }));
  // };
  const handleChange = (event: React.ChangeEvent<unknown>, newPage: any) => {
    setPage(newPage); // Update the local state
    dispatch(paginationPage({ page: newPage, pageSize: 2 }));
  };

  // useEffect(() => {

  // }, [page, dispatch]);

  // console.log(movies, "form serer");

  // function getGenresForMovies(
  //   movies: Movie[],
  //   genres: Genre[],
  //   movieGenreRelations: MovieGenres[]
  // ): MovieWithGenres[] {
  //   const result: { [key: number]: MovieWithGenres } = {};

  //   movieGenreRelations &&
  //     movieGenreRelations.forEach((relation) => {
  //       const { movieId, genreId } = relation;

  //       if (!result[movieId]) {
  //         result[movieId] = {
  //           movie: movies.find((movie) => movie.id === movieId) as Movie, // Ensure correct type
  //           genres: [],
  //         };
  //       }

  //       // Find the genre object and add it to the genres array
  //       const genre = genres.find((genre) => genre.id === genreId);
  //       if (genre) {
  //         result[movieId].genres.push(genre);
  //       }
  //     });

  //   return Object.values(result);
  // }
  // function getGenresForMovies(
  //   movies: Movie[],
  //   genres: Genre[],
  //   movieGenreRelations: MovieGenres[],
  //   currentPage: number,
  //   pageSize: number
  // ): MovieWithGenres[] {
  //   const result: { [key: number]: MovieWithGenres } = {};

  //   const startIndex = (currentPage - 1) * pageSize;

  //   movieGenreRelations &&
  //     movieGenreRelations
  //       .filter((relation) => {
  //         const { movieId } = relation;
  //         return movieId >= startIndex && movieId < startIndex + pageSize;
  //       })
  //       .forEach((relation) => {
  //         const { movieId, genreId } = relation;

  //         if (!result[movieId]) {
  //           result[movieId] = {
  //             movie: movies.find((movie) => movie.id === movieId) as Movie,
  //             genres: [],
  //           };
  //         }

  //         // Find the genre object and add it to the genres array
  //         const genre = genres.find((genre) => genre.id === genreId);
  //         if (genre) {
  //           result[movieId].genres.push(genre);
  //         }
  //       });

  //   return Object.values(result);
  // }

  // Get genres for each movie
  // const moviesWithGenres = getGenresForMovies(
  //   movies,
  //   genres,
  //   movieGenres,
  //   totalPages,
  //   page
  // );
  // console.log(moviesWithGenres);
  const getDate = (date: any) => {
    const originalDate = new Date(`${date}`);

    // Format the date
    return originalDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Box sx={{ mt: 2, ml: 4 }}>
      <TableContainer>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
        >
          <TableHead>
            <TableRow sx={{ display: "flex" }}>
              <TableCell width={"5%"}>
                <Typography sx={{ fontSize: 14, color: "warning.light" }}>
                  ID
                </Typography>
              </TableCell>
              <TableCell width={"30%"} align="left">
                <Typography sx={{ fontSize: 14, color: "warning.light" }}>
                  TITLE
                </Typography>
              </TableCell>
              <TableCell width={"10%"} align="left">
                <Typography sx={{ fontSize: 14, color: "warning.light" }}>
                  {" "}
                  IMDb RATING
                </Typography>
              </TableCell>
              <TableCell width={"10%"} align="left">
                <Typography sx={{ fontSize: 14, color: "warning.light" }}>
                  STATUS
                </Typography>
              </TableCell>
              <TableCell width={"10%"} align="left">
                <Typography sx={{ fontSize: 14, color: "warning.light" }}>
                  GENRES
                </Typography>
              </TableCell>
              <TableCell width={"10%"} align="left">
                <Typography sx={{ fontSize: 14, color: "warning.light" }}>
                  CREATED DATE
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography sx={{ fontSize: 14, color: "warning.light" }}>
                  ACTIONS
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              borderRadius: 20,
              border: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {movies &&
              movies.map((movie) => (
                <TableRow
                  key={movie.id}
                  sx={{
                    borderRadius: 4,
                    height: 70,
                    backgroundColor: "#151f30",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TableCell width={"5%"}>{movie.id}</TableCell>
                  <TableCell width={"30%"} align="left">
                    {movie.title}
                  </TableCell>
                  <TableCell
                    width={"10%"}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    align="left"
                  >
                    <StarBorderIcon
                      sx={{ fontSize: 20, color: "primary.main" }}
                    />
                    <Typography>{movie.imdb}</Typography>
                  </TableCell>
                  <TableCell width={"10%"} align="left">
                    {movie.isArchived === false ? "visible" : "hidden"}
                  </TableCell>
                  <TableCell width={"10%"} align="left">
                    {/* {.genres.map((genre) => (
                      <Typography sx={{ fontSize: 12 }} key={genre.id}>
                        {genre.name}
                      </Typography>
                    ))} */}
                  </TableCell>
                  <TableCell width={"10%"} align="left">
                    {getDate(movie.createdAt)}
                  </TableCell>
                  <TableCell
                    sx={{ display: "flex", gap: 2 }}
                    width={"10%"}
                    align="left"
                  >
                    <IconButton
                      width="35px"
                      height="35px"
                      bgcolor="#172e37"
                      color="#29b474"
                      onClick={() => {}}
                      Icon={<LockOutlinedIcon sx={{ fontSize: 18 }} />}
                    ></IconButton>
                    <IconButton
                      width="35px"
                      height="35px"
                      bgcolor="#2d302d"
                      color="#f5bc13"
                      onClick={() => {}}
                      Icon={<VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                    ></IconButton>
                    <IconButton
                      width="35px"
                      height="35px"
                      color="#eb5757"
                      bgcolor="#2b2534"
                      onClick={() => {}}
                      Icon={<DeleteOutlinedIcon sx={{ fontSize: 18 }} />}
                    ></IconButton>
                    <IconButton
                      width="35px"
                      height="35px"
                      color="#2e7ce5"
                      bgcolor="#182943"
                      onClick={() => {}}
                      Icon={<CreateOutlinedIcon sx={{ fontSize: 18 }} />}
                    ></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            <TableRow
              sx={{
                borderRadius: 4,
                height: 70,
                backgroundColor: "#151f30",
                mb: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <TableCell sx={{ width: "75%" }}></TableCell>
              <TableCell sx={{ width: "25%" }}>
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MoviePage;
