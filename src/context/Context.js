import React, { createContext, useEffect, useState } from "react";
import MovieDetails from "../pages/MovieDetails";

const API = `7f43d469e4b124bca9e8aa24fe508eaf`;

const Context = ({ idFilter }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${idFilter}`
        );

        if (response.ok) {
          const data = await response.json();
          setData(data.results);
          console.log(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [idFilter]);

  return (
    <>
      {data?.map((movie) => (
        <div>
          <MovieDetails movie={movie} />;
          {/* <p>title: {movie.title}</p>
          <p>genre id: {movie.genre_ids.map((id) => `${id} ,`)} </p>
          <br /> */}
        </div>
      ))}
    </>
  );
};

export default Context;
