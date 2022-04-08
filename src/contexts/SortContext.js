import React, { useState, createContext, useEffect } from "react";
import tmdbApi from "../app/tmdbApi";

let movies = [];
const sort = {
  arr: movies,
  keyword: "",
  change: () => {},
};

// const sortURL =
//   "https://api.themoviedb.org/3/discover/movie?api_key=7f43d469e4b124bca9e8aa24fe508eaf";

export const SortContext = createContext(sort);

function SortContextProvider({ children }) {
  const [moviesSort, setMoviesSort] = useState([]);
  const [sortInput, setSortInput] = useState("");

  // const movieBySort = async (sortInput) => {
  //   try {
  //     const url = `${sortURL}&sort_by=${sortInput}`;
  //     const res = await fetch(url);
  //     const movies = await res.json();
  //     console.log("data", movies);
  //     return movies;
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };
  useEffect(() => {
    setMoviesSort(tmdbApi.getMovieSort(sortInput));
  }, [sortInput]);

  return (
    <SortContext.Provider
      value={{
        arr: moviesSort,
        keyword: sortInput,
        change: setSortInput,
      }}
    >
      {children}
    </SortContext.Provider>
  );
}

export default SortContextProvider;
