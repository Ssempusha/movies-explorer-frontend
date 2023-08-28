import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import filmImg from "../../images/film-img.jpg";

function MoviesCard() {
  const location = useLocation();
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const likeImage = () => {
    if (location.pathname === "/movies") {
      return liked
        ? "movies-card__save-button-active"
        : "movies-card__save-button";
    } else {
      return "movies-card__save-button-delete";
    }
  };

  return (
    <li className="movies-card">
      <img className="movies-card__image" src={filmImg} alt="33 слова о дизайне" />
      <div className="movies-card__film-container">
        <div className="movies-card__film-info-container">
          <h2 className="movies-card__film-name">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч42м</p>
        </div>
        <button type="button" className={likeImage()} onClick={toggleLike} />
      </div>
    </li>
  );
}

export default MoviesCard;
