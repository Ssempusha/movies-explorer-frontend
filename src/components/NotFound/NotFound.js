import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
        <Link to="/" className="not-found__back-link">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
