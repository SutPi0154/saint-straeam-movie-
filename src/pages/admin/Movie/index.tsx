import { useAppSelector } from "@/store/hooks";
import {
  Box,
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

import React from "react";
import { Genre, Movie, MovieGenres } from "@prisma/client";

const MoviePage = () => {
  const movies = useAppSelector((store) => store.movie.items);
  const movieGenres = useAppSelector((store) => store.movieGenres.items);
  console.log(movieGenres);
  const genres = useAppSelector((store) => store.genre.items);

  interface MovieWithGenres {
    movie: Movie;
    genres: Genre[];
  }
  function getGenresForMovies(
    movies: Movie[],
    genres: Genre[],
    movieGenreRelations: MovieGenres[]
  ): MovieWithGenres[] {
    const result: { [key: number]: MovieWithGenres } = {};

    // Iterate through movieGenreRelations
    movieGenreRelations.forEach((relation) => {
      const { movieId, genreId } = relation;

      // Check if the movieId is in the result object
      if (!result[movieId]) {
        result[movieId] = {
          movie: movies.find((movie) => movie.id === movieId) as Movie, // Ensure correct type
          genres: [],
        };
      }

      // Find the genre object and add it to the genres array
      const genre = genres.find((genre) => genre.id === genreId);
      if (genre) {
        result[movieId].genres.push(genre);
      }
    });

    return Object.values(result);
  }

  // Function to print the result
  function printMoviesWithGenres(moviesWithGenres: MovieWithGenres[]) {
    moviesWithGenres.forEach((movie) => {
      const movieTitle = movie.movie.title; // Adjust property name to 'title'
      const genreNames = movie.genres.map((genre) => genre.name).join(", ");
      console.log(`${movieTitle} genres: ${genreNames}`);
    });
  }

  // Get genres for each movie
  const moviesWithGenres = getGenresForMovies(movies, genres, movieGenres);

  console.log(moviesWithGenres);
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
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MoviePage;
