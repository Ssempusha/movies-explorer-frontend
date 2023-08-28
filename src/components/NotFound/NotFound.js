import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
          <button
            type="button"
            className="not-found__back-button"
            onClick={() => navigate(-1)}
          >
            Назад
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
