import React from "react";
import "./Movie.css";

const Movie = ({ bgImage, name }) => {
  
  return (
    <div className="flex_movies">
      <img className="row_poster" src={bgImage} alt={name} />
    </div>
  );
};
export default Movie;
