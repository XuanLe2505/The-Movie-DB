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
};

export default tmdbApi;
