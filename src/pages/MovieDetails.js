import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../app/tmdbApi";
import LoadingScreen from "../components/LoadingScreen";
import MovieTrailer from "../components/MovieTrailer";

import "./MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getMoveDetails = async () => {
      try {
        const response = await tmdbApi.getMovieDetails(movieId);
        setMovie(response);

        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    };
    getMoveDetails();
  }, []);

  if (!movie) return <LoadingScreen />;

  const movieImg = `https://image.tmdb.org/t/p/original${
    movie.backdrop_path || movie.poster_path
  }`;

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${movieImg})`,
        }}
      />
      <div className="movie-page">
        <div className="movie-details">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="img"
            />
          </div>

          <div className="movie-content">
            <h1 className="title">{movie.title || movie.name}</h1>
            <div className="genres">
              {movie.genres.map(({ name, id }) => (
                <span
                  key={id}
                  className="genres-item"
                  style={{ marginRight: "1rem" }}
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
        <MovieTrailer />
      </div>
    </>
  );
};

export default MovieDetails;
