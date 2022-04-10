import { Grid } from "@mui/material";
import React from "react";
import useFavorite from "../hooks/useFavorite";
import MovieCard from "../components/MovieCard";
function AccountPage() {
  const movies = Object.values(useFavorite().idList);
  console.log("movies", movies);
  return (
    <>
      <div>AccountPage</div>
      <div>Favorite Movie List</div>
      <Grid container spacing={2} mt={1}>
        {movies?.filter(Boolean).map((movie) => (
          <Grid item key={movie.id} xs={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AccountPage;
