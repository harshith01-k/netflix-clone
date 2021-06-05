import "./Banner.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieNames } from "./Actions/movieAction";
const base = `https://image.tmdb.org/t/p/original/`;

const Banner = () => {
  const [movie, setMovie] = useState();

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieNames());
    setMovie(Math.floor(Math.random() * 20));
  }, [dispatch]);

  const { originals } = useSelector((item) => item.movies);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // // console.log(originals[1].first_air_date);
  // console.log(`name isn  ${movie}`)
  // // console.log(`${originals[${movie}]}`);
  // console.log("details is : ", originals[movie])

  return (
    <div
      className="header"
      style={{
        zIndex: -1,
        backgroundSize: "cover",
        // background: "#000",
        backgroundPosition: "center center",
        backgroundImage: `url(${base}${originals[movie]?.backdrop_path})`,
        color: "#fff",
      }}
    >
      <div className="banner_contents">
        <div className="movie-title">
          <h1>{originals[movie]?.original_name}</h1>
        </div>
        <div className="buttons">
          <button className="playBtn btn">Play</button>
          <button className="listBtn btn">My List</button>
        </div>
        <div className="description">
          {truncate(originals[movie]?.overview, 100)}
        </div>
      </div>
      <div className="faded"></div>
    </div>
  );
};
export default Banner;
