import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie, isLike, onClick }) {
  const location = useLocation();

  const handleClickMovie = () => {
    onClick(movie);
  };

  const savedMoviesPage = location.pathname === "/saved-movies";

  const movieImage = savedMoviesPage
    ? movie.image
    : `https://api.nomoreparties.co/${movie.image.url}`;

  const buttonImages = () => {
    if (location.pathname === "/movies")
      return isLike
        ? "movies-card__save-button-active"
        : "movies-card__save-button";
    if (location.pathname === "/saved-movies")
      return "movies-card__save-button-delete";
  };

  function conversionDuration(number) {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;

    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className="movies-card">
      <a
        className="movies-card__film-trailer"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={movieImage}
          alt={movie.nameRU}
        />
      </a>
      <div className="movies-card__film-container">
        <div className="movies-card__film-info-container">
          <h2 className="movies-card__film-name" title={movie.nameRU}>
            {movie.nameRU}
          </h2>
          <p className="movies-card__duration">
            {conversionDuration(movie.duration)}
          </p>
        </div>
        <button
          type="button"
          className={buttonImages()}
          onClick={handleClickMovie}
        />
      </div>
    </li>
  );
}

export default MoviesCard;
