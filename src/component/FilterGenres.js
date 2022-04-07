import React, { useEffect, useState } from "react";
import Context from "../context/Context";

const API = `7f43d469e4b124bca9e8aa24fe508eaf`;

const FilterGenres = () => {
  const [genres, setGenres] = useState();
  const [idFilter, setIdFilter] = useState();
  console.log(`render`);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          ` https://api.themoviedb.org/3/genre/movie/list?api_key=${API}`
        );
        if (response.ok) {
          const dataGenres = await response.json();
          setGenres(dataGenres.genres);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleFilter = (id) => {
    console.log(`filter`, id);
    // const filterData = data.filter((movie) => movie.genre_ids.includes(id));
    // console.log("filter :>> ", filterData);
    // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API}}&with_genres=${id}`;
    setIdFilter(id);
  };
  return (
    <div>
      {genres?.map(({ name, id }) => (
        <button key={id} onClick={() => handleFilter(id)}>
          {name}
        </button>
      ))}
      {idFilter && <Context idFilter={idFilter} />}
    </div>
  );
};

export default FilterGenres;
