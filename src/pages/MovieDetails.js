import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../app/tmdbApi";
import LoadingScreen from "../components/LoadingScreen";
import MovieTrailer from "../components/MovieTrailer";
import useAuth from "../hooks/useAuth";
import useFavorite from "../hooks/useFavorite";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  let navigate = useNavigate();
  const isLogin = useAuth();
  const idList = useFavorite().idList;
  const setIdList = useFavorite().setIdList;
  const location = useLocation();

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
            <h1 className="title">{movie.title || movie.name}</h1>{" "}
            <span>
              {idList[movie.id] ? (
                <button
                  onClick={() => setIdList({ ...idList, [movie.id]: false })}
                >
                  {" "}
                  Remove from Favorite{" "}
                </button>
              ) : (
                <button
                  onClick={
                    isLogin.isAuthenticated
                      ? () =>
                          setIdList({
                            ...idList,
                            [movie.id]: movie,
                          })
                      : () => navigate("/login")
                  }
                  state={{ backgroundLocation: location }}
                >
                  Add To Favorite
                </button>
              )}
              <button
                onClick={
                  isLogin.isAuthenticated
                    ? () =>
                        setIdList({
                          ...idList,
                          [movie.id]: movie,
                        })
                    : () => navigate("/login")
                }
                disabled={movie.id in idList}
                state={{ backgroundLocation: location }}
              >
                Add To Favorite
              </button>
            </span>
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
