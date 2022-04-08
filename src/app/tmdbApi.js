import apiService from "./apiService";

const tmdbApi = {
  getMovies: async (params) => {
    const url = `discover/movie/`;
    try {
      const data = await apiService.get(url, { params });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getMovieDetails: async (movieId) => {
    const url = `movie/${movieId}`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getMovieGenres: async () => {
    const url = `genre/movie/list`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getMovieSearch: async (searchInput) => {
    const url = `search/multi/${searchInput}`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getMovieSort: async (sortInput) => {
    const url = `discover/movie/${sortInput}`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getMoviePopular: async () => {
    const url = `movie/popular`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getMovieNPlaying: async () => {
    const url = `movie/now_playing`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getMovieUpComing: async () => {
    const url = `movie/upcoming`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getMovieTopRated: async () => {
    const url = `movie/top_rated`;
    try {
      const data = await apiService.get(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default tmdbApi;
