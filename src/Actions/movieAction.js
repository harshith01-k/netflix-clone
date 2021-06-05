import axios from "axios";
import { fetchTrending } from "../api";
import { fetchNetflixOriginals } from "../api";
import { fetchTopRated } from "../api";
import { fetchActionMovies } from "../api";
import { fetchComedyMovies } from "../api";
import { fetchHorrorMovies } from "../api";
import { fetchRomanceMovies } from "../api";
import { fetchDocumentaries } from "../api";

export const movieNames = () => async (dispatch) => {
  // const trending = await axios.get(fetchTrending());
  // const originals = await axios.get(fetchNetflixOriginals());
  // const toprated = await axios.get(fetchTopRated());
  // const action = await axios.get(fetchActionMovies());
  // const comedy = await axios.get(fetchComedyMovies());
  // const horror = await axios.get(fetchHorrorMovies());
  // const romance = await axios.get(fetchRomanceMovies());
  // const documentary = await axios.get(fetchDocumentaries());
  const ans = await axios.get("https://www.googleapis.com/youtube/v3/videos");
  console.log(`ans is ${ans}`);

  dispatch({
    type: "FETCH_MOVIE",
    payload: {
      trending: trending.data.results,
      originals: originals.data.results,
      toprated: toprated.data.results,
      action: action.data.results,
      comedy: comedy.data.results,
      horror: horror.data.results,
      romance: romance.data.results,
      documentary: documentary.data.results,
    },
  });
};
