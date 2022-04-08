import { Alert, Box, Container, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import LoadingScreen from "../components/LoadingScreen";
import tmdbApi from "../app/tmdbApi";
import FilterGenres from "../components/FilterGenres";

function BrowsePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState();
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    const getMoviesList = async () => {
      setLoading(true);
      const params = {
        page: currentPage,
      };
      try {
        const response = await tmdbApi.getMovies(params);
        setMovies(response.results);
        setTotalPage(response.total_pages);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getMoviesList();
  }, [currentPage]);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <FilterGenres />
      <Stack sx={{ flexGrow: 1 }}>
        <Box sx={{ position: "relative", height: 1 }}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <MovieList
                  movies={movies}
                  setCurrentPage={setCurrentPage}
                  totalPage={totalPage}
                  currentPage={currentPage}
                />
              )}
            </>
          )}
        </Box>
      </Stack>
    </Container>
  );
}

export default BrowsePage;
