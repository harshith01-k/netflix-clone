const API_KEY = "5ce891309569085306aeea434ad09185";

// https = () =>//api.themoviedb.org/3/movie/550?api_key=ff4b61ee32e24a9be4f298864c5e1766

const baseUrl = "https://api.themoviedb.org/3";

// https://api.themoviedb.org/3/trending/all/week?api_key=ff4b61ee32e24a9be4f298864c5e1766&language=en-US

export const fetchTrending = () =>
  `${baseUrl}trending/all/week?api_key=${API_KEY}&language=en-US`;
export const fetchNetflixOriginals = () =>
  `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`;
export const fetchTopRated = () =>
  `${baseUrl}movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const fetchActionMovies = () =>
  `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`;
export const fetchComedyMovies = () =>
  `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=35`;
export const fetchHorrorMovies = () =>
  `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=27`;
export const fetchRomanceMovies = () =>
  `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const fetchDocumentaries = () =>
  `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=99`;
