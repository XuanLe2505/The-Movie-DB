import React, { useEffect, useState } from "react";
import tmdbApi from "../app/tmdbApi";

const FilterGenres = ({ getMoviesList, setCurrentPage }) => {
  const [genres, setGenres] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await tmdbApi.getMovieGenres();
        setGenres(response.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {genres?.map(({ name, id }) => (
        <button
          key={id}
          onClick={async () => {
            getMoviesList({ with_genres: id, page: 1 });
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterGenres;
