import { Alert, Box, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import LoadingScreen from "../components/LoadingScreen";
import tmdbApi from "../app/tmdbApi";
import FilterGenres from "../components/FilterGenres";

const MAX_PAGES = 500;

function BrowsePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState();
  const [totalPage, setTotalPage] = useState();

  console.log("loading", loading);

  const getMoviesList = async (params = {}) => {
    setLoading(true);

    const fetchParams = {
      page: currentPage,
      ...params,
    };

    try {
      const response = await tmdbApi.getMovies(fetchParams);
      setMovies(response.results);
      setTotalPage(
        response.total_pages > MAX_PAGES ? MAX_PAGES : response.total_pages
      );

      if (params.page && currentPage !== params.page) {
        setCurrentPage(params.page);
      }

      setError("");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMoviesList();
  }, [currentPage]);

  return (
    <Container sx={{ height: "100vh", mt: 3 }}>
      <FilterGenres
        getMoviesList={getMoviesList}
        setCurrentPage={setCurrentPage}
      />
      <Box sx={{ position: "relative", height: 1, width: "100%" }}>
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
    </Container>
  );
}

export default BrowsePage;
