import "./Row.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieNames } from "./Actions/movieAction";
import Movie from "./Movie";
const base = `https://image.tmdb.org/t/p/original/`;

const Row = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieNames());
  }, [dispatch]);
  const {
    trending,
    originals,
    toprated,
    action,
    comedy,
    horror,
    romance,
    documentary,
  } = useSelector((item) => item.movies);
  return (
    <div className="row_posters">
      <h2>NETFLIX ORIGINALS</h2>
      <div className="movies_list">
        {originals.map((item) => (
          <Movie
            className="extra"
            item={item}
            key={item.id}
            bgImage={`${base}${item ? item.poster_path : "loading"}`}
            name={item.title}
          />
        ))}
      </div>
      <h2>Trending Now</h2>
      <div className="movies_list">
        {trending.map((item) => (
          <Movie
            item={item}
            key={item.id}
            bgImage={`${base}${item.backdrop_path}`}
            name={item.title}
          />
        ))}
      </div>
      <h2>Top Rated</h2>
      <div className="movies_list">
        {toprated.map((item) => (
          <Movie
            item={item}
            key={item.id}
            bgImage={`${base}${item.backdrop_path}`}
            name={item.title}
          />
        ))}
      </div>
      <h2>Action Movies</h2>
      <div className="movies_list">
        {action.map((item) => (
          <Movie
            item={item}
            key={item.id}
            bgImage={`${base}${item.backdrop_path}`}
            name={item.title}
          />
        ))}
      </div>
      <h2>Comedy Movies</h2>
      <div className="movies_list">
        {comedy.map((item) => (
          <Movie
            key={item.id}
            item={item}
            bgImage={`${base}${item.backdrop_path}`}
            name={item.title}
          />
        ))}
      </div>
      <h2>Horror</h2>
      <div className="movies_list">
        {horror.map((item) => (
          <Movie
            key={item.id}
            item={item}
            bgImage={`${base}${item.backdrop_path}`}
            name={item.title}
          />
        ))}
      </div>
      <h2>Romance Movies</h2>
      <div className="movies_list">
        {romance.map((item) => (
          <Movie
            key={item.id}
            item={item}
            bgImage={`${base}${item.backdrop_path}`}
            name={item.title}
          />
        ))}
      </div>
      <h2>Documentaries</h2>
      <div className="movies_list">
        {documentary.map((item) => (
          <Movie
            key={item.id}
            item={item}
            bgImage={`${base}${item.backdrop_path}`}
            name={item.title}
          />
        ))}
      </div>
    </div>
  );
};
export default Row;
