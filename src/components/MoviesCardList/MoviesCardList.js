import React, { useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader";

function MoviesCardList() {
  // временное переключение лоадера вручную
  const [isPreloader, setIsPreloader] = useState(false);
  return (
    <section className="movies-list">
      {isPreloader ? (
        <Preloader />
      ) : (
        <>
          <ul className="movies-list__list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </ul>
          <button type="button" className="movies-list__button-more">
            Ещё
          </button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
