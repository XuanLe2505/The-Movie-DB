import { bgcolor } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../app/tmdbApi";
import LoadingScreen from "../components/LoadingScreen";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await tmdbApi.getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  if (!movie) return <LoadingScreen />;

  const imgBg = `https://image.tmdb.org/t/p/w500${movie[`backdrop_path`]}`;
  return (
    <div className="page" style={{ backgroundImage: `url(${imgBg})` }}>
      <div className="container">
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w500${movie[`poster_path`]}`}
          alt="img"
        />

        <div style={{ marginRight: 30 }}>
          <h1>{movie.title}</h1>
          <p>{movie[`release_date`]}</p>
          <p>
            <span className="strong-text">Description</span>: {movie.overview}
          </p>
          <p>
            <span className="strong-text">Genres</span>:
            {movie.genres.map(({ name, id }) => (
              <span style={{ marginLeft: 5 }} key={id}>
                <button
                  disabled="disabled"
                  style={{ color: "black", backgroundColor: "bisque" }}
                >
                  {" "}
                  {name}
                </button>
              </span>
            ))}
          </p>
          <p>
            <span className="strong-text">Vote average</span>:{" "}
            {movie[`vote_average`]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
