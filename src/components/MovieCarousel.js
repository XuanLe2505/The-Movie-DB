// import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MovieCard from "./MovieCard";

function MovieCarousel({ movies }) {
  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-evenly",
        }}
        style={{
          overflow: "scroll",
        }}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Box>
    </>
  );
}

export default MovieCarousel;
