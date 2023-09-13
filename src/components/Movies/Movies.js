import React, { useState, useEffect } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  loggedIn,
  filterNameMovies,
  filterDurationMovies,
  savedMovies,
  onSaveMovies,
  onDeleteMovie,
}) {
  const [isPreloader, setIsPreloader] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);
  const checkShortMovies =
    JSON.parse(localStorage.getItem("isShortMovie")) ?? false;
  const [isShortMovie, setIsShortMovie] = useState(checkShortMovies);
  const allMovies = JSON.parse(localStorage.getItem("allMovies")) ?? [];

  const handleFilterMovies = (movies, request, isShort) => {
    const filteredFilms = filterNameMovies(movies, request);
    localStorage.setItem("filteredMovies", JSON.stringify(filteredFilms));
    if (!filteredFilms.length) {
      setSearchText("Ничего не найдено.");
    }
      setFilterMovies(
        isShort ? filterDurationMovies(filteredFilms) : filteredFilms
      );
  };

  const findMovie = (req, checkShort) => {
    setIsPreloader(true);
    setSearchText("");
    if (!allMovies.length) {
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem("allMovies", JSON.stringify(movies));
          handleFilterMovies(movies, req, checkShort);
          setIsPreloader(false);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
          setIsPreloader(false);
          setSearchText(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        })
        .finally(() => {
          localStorage.setItem("request", req);
          localStorage.setItem("isShortMovie", checkShort);
        });
    } else {
      handleFilterMovies(allMovies, req, checkShort);
      setIsPreloader(false);
      localStorage.setItem("request", req);
      localStorage.setItem("isShortMovie", checkShort);
    }
  };

  const handleFilterCheckbox = () => {
    setIsShortMovie((prevState) => {
      const newState = !prevState;
      localStorage.setItem("isShortMovie", JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    setIsPreloader(true);
    const defaultMovies = JSON.parse(localStorage.getItem("filteredMovies"));
    if (defaultMovies) {
      if (defaultMovies.length !== 0) {
        setIsShortMovie(JSON.parse(localStorage.getItem("isShortMovie")));
        setFilterMovies(
          isShortMovie ? filterDurationMovies(defaultMovies) : defaultMovies
        );
      } else {
        setSearchText("Ничего не найдено");
      }
    }
    setIsPreloader(false);
  }, [filterDurationMovies, isShortMovie]);

  const handleClickMovie = (movie) => {
    const movieDelete = savedMovies.find(
      (savedFilm) => savedFilm.movieId === movie.id
    );
    movieDelete ? onDeleteMovie(movieDelete._id) : onSaveMovies(movie);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm
          onSubmit={findMovie}
          onChange={handleFilterCheckbox}
          isShortMovie={isShortMovie}
        />
        <MoviesCardList
          movies={filterMovies}
          searchText={searchText}
          savedMovies={savedMovies}
          onClick={handleClickMovie}
          loader={isPreloader}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
