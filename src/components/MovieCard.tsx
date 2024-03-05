import { Box, Typography } from "@mui/material";
import { Movie } from "@prisma/client";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        ml: 2,

        flexDirection: "column",
        gap: 1,
        backgroundColor: "#151f30",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,

          width: "100%",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "5%", ml: 2 }}>
          <Typography>{movie.id}</Typography>
        </Box>
        <Box sx={{ width: "25%", my: 2 }}>
          <Typography>{movie.title}</Typography>
        </Box>
        <Box sx={{ width: "10%", my: 2 }}>
          <Box sx={{ display: "flex" }}>
            <StarBorderIcon sx={{ fontSize: 20, color: "primary.main" }} />
            <Typography>{movie.imdb}</Typography>
          </Box>
        </Box>
        <Box sx={{ width: "10%", my: 2 }}>
          {movie.isArchived === false ? "visible" : "hidden"}
        </Box>
        <Box sx={{ width: "10%", my: 2 }}>GENRES</Box>
        <Box sx={{ width: "20%", my: 2 }}>{movie.releaseDate}</Box>
        <Box sx={{ width: "25%", my: 2 }}>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCard;
