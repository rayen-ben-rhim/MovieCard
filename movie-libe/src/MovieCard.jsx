import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-description">{movie.description}</p>
      {/* <img className="movie-poster" src={movie.posterURL} alt="Movie Poster" /> */}
      <p className="movie-rating">Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
