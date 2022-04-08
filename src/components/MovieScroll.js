import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MovieCard from "./MovieCard";

function MovieScroll({ movies }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          overflow: "scroll",
        }}
      >
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={6} md={4} lg={3} sx={{ mr: 2 }}>
            <MovieCard movie={movie} className="movie-card" />
          </Grid>
        ))}
      </Box>
    </>
  );
}

export default MovieScroll;
