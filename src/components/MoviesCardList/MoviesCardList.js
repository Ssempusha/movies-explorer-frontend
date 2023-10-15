import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies, searchText, onClick, savedMovies, loader }) {
  const location = useLocation();
  const [shownMovies, setShownMovies] = useState(4);
  const [widhWindow, setWidhWindow] = useState(window.innerWidth);

  const displayElements = () => {
    if (window.innerWidth > 1279) {
      setShownMovies((prev) => prev + 4);
    } else if (window.innerWidth >= 990 && window.innerWidth <= 1279) {
      setShownMovies((prev) => prev + 3);
    } else if (window.innerWidth >= 320 && window.innerWidth <= 989) {
      setShownMovies((prev) => prev + 2);
    }
  };

  useEffect(() => {
    if (widhWindow > 1279) {
      setShownMovies(16);
    } else if (widhWindow <= 1279 && widhWindow >= 990) {
      setShownMovies(15);
    } else if (widhWindow <= 989 && widhWindow >= 767) {
      setShownMovies(8);
    } else if (widhWindow <= 766 && widhWindow >= 320) {
      setShownMovies(5);
    }
  }, [widhWindow]);

  const handleResize = useCallback(() => {
    if (widhWindow !== window.innerWidth) {
      setWidhWindow(window.innerWidth);
    }
  }, [widhWindow]);

  useEffect(() => {
    let timer;
    const handleResizeTimeout = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleResize();
      }, 500);
    };
    window.addEventListener("resize", handleResizeTimeout);
    return () => {
      window.removeEventListener("resize", handleResizeTimeout);
    };
  }, [handleResize]);

  const savedMoviesPage = location.pathname === "/saved-movies";

  const handleLikeFilm = (movie) => {
    if (savedMoviesPage) {
      return true;
    } else {
      return !!savedMovies.find((film) => film.movieId === movie.id);
    }
  };

  return (
    <section className="movies-list">
      {loader ? (
        <Preloader />
      ) : (
        <>
          {movies.length === 0 ? (
            <p className="movies-list__info-text">
              {searchText ? searchText : "Нужно ввести ключевое слово."}
            </p>
          ) : (
            <>
              <ul className="movies-list__list">
                {movies.slice(0, shownMovies).map((movie) => (
                  <MoviesCard
                    movie={movie}
                    key={savedMoviesPage ? movie._id : movie.id}
                    isLike={handleLikeFilm(movie)}
                    onClick={onClick}
                  />
                ))}
              </ul>
              <>
                {shownMovies < movies.length && (
                  <button
                    className="movies-list__button-more"
                    type="button"
                    onClick={displayElements}
                  >
                    Ещё
                  </button>
                )}
              </>
            </>
          )}{" "}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
