import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../app/tmdbApi";

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
  if (!movie) return <p>Loading......</p>;

  return (
    <div className="container">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie[`poster_path`]}`}
          alt="img"
        />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie[`release_date`]}</p>
        <p>Description: {movie.overview}</p>
        <p>
          Genres:{" "}
          {movie.genres.map(({ name, id }) => (
            <span style={{ marginRight: 5 }} key={id}>
              {name}
            </span>
          ))}
        </p>
        <p>Vote average: {movie[`vote_average`]}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
