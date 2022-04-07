import React, { useState, createContext, useEffect } from "react";

let movies = [];
const search = {
  arr: movies,
  keyword: "",
  change: () => {},
};

const searchURL =
  "https://api.themoviedb.org/3/search/multi?api_key=7f43d469e4b124bca9e8aa24fe508eaf";

export const SearchContext = createContext(search);

function SearchContextProvider({ children }) {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const movieBySearch = async (searchInput) => {
    try {
      const url = `${searchURL}&query=${searchInput}`;
      const res = await fetch(url);
      const movies = await res.json();
      console.log("data", movies);
      return movies;
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMoviesSearch(await movieBySearch(searchInput));
  };

  return (
    <SearchContext.Provider
      value={{
        arr: moviesSearch,
        keyword: searchInput,
        change: setSearchInput,
        submit: handleSubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
