import React, { useState, useEffect } from "react";
import SearchContextProvider from "../contexts/SearchContext";
import MovieSearch from "../components/MovieSearch";
// import SortContextProvider from "../contexts/SortContext";
// import FormProvider from "../components/form/FormProvider";
// import MovieSort from "../components/MovieSort";
import { useForm } from "react-hook-form";
import tmdbApi from "../app/tmdbApi";
import { Alert, Box, Container, Stack } from "@mui/material";
// import MovieList from "../components/MovieList";
import LoadingScreen from "../components/LoadingScreen";
import MovieCarousel from "../components/MovieCarousel";

const defaultValues = {
  sortBy: "popularity.desc",
  searchQuery: "",
};
function HomePages() {
  // const methods = useForm({ defaultValues });
  const [moviesPop, setMoviesPop] = useState([]);
  const [moviesNPlaying, setMoviesNPlaying] = useState([]);
  const [moviesUC, setMoviesUC] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  useEffect(() => {
    const listPopular = async () => {
      setLoading(true);
      try {
        const response = await tmdbApi.getMoviePopular();
        setMoviesPop(response.results);
        setError1("");
      } catch (error) {
        setError1(error.message);
      }
      setLoading(false);
    };
    listPopular();
  }, []);

  useEffect(() => {
    const listNowPlaying = async () => {
      setLoading(true);
      try {
        const response = await tmdbApi.getMovieNPlaying();
        setMoviesNPlaying(response.results);
        setError2("");
      } catch (error) {
        setError2(error.message);
      }
      setLoading(false);
    };
    listNowPlaying();
  }, []);

  useEffect(() => {
    const listUpComing = async () => {
      setLoading(true);
      try {
        const response = await tmdbApi.getMovieUpComing();
        setMoviesUC(response.results);
        setError3("");
      } catch (error) {
        setError3(error.message);
      }
      setLoading(false);
    };
    listUpComing();
  }, []);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <Stack sx={{ flexGrow: 1 }}>
        <SearchContextProvider>
          <MovieSearch />
        </SearchContextProvider>

        {/* <SortContextProvider>
        <FormProvider methods={methods}>
          <MovieSort />
        </FormProvider>
      </SortContextProvider> */}

        <Box sx={{ position: "relative", height: 1 }}>
          Popular
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error1 ? (
                <Alert severity="error">{error1}</Alert>
              ) : (
                <MovieCarousel movies={moviesPop} />
              )}
            </>
          )}
        </Box>

        <Box sx={{ position: "relative", height: 1 }}>
          Now Playing
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error2 ? (
                <Alert severity="error">{error2}</Alert>
              ) : (
                <MovieCarousel movies={moviesNPlaying} />
              )}
            </>
          )}
        </Box>

        <Box sx={{ position: "relative", height: 1 }}>
          UpComing
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error3 ? (
                <Alert severity="error">{error3}</Alert>
              ) : (
                <MovieCarousel movies={moviesUC} />
              )}
            </>
          )}
        </Box>
      </Stack>
    </Container>
  );
}

export default HomePages;
