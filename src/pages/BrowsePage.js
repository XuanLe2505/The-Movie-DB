import { Alert, Box, Container, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import LoadingScreen from "../components/LoadingScreen";
import tmdbApi from "../app/tmdbApi";

function BrowsePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMoviesList = async () => {
      setLoading(true);
      const params = page;
      try {
        const response = await tmdbApi.getMovies(params);
        setMovies(response.data.results);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getMoviesList();
  }, [page]);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <Stack sx={{ flexGrow: 1 }}>
        <Box sx={{ position: "relative", height: 1 }}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <MovieList movies={movies} setPage={setPage} />
              )}
            </>
          )}
        </Box>
      </Stack>
    </Container>
  );
}

export default BrowsePage;
