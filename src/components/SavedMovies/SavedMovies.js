import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
  loggedIn,
  filterNameMovies,
  savedMovies,
  onDeleteMovie,
  filterDurationMovies,
}) {
  const [isPreloader, setIsPreloader] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);
  const [shortMovie, setShortMovie] = useState();
  const [text, setText] = useState("");

  const handleCheckbox = () => {
    setShortMovie(!shortMovie);
  };

  const handleSearchMovies = async (req) => {
    if (savedMovies) {
      setSearchText("");
      setFilterMovies(filterNameMovies(savedMovies, req));
      setText(req);
    }
  };

  useEffect(() => {
    setIsPreloader(true);
    if (savedMovies) {
      const moviesVisible = filterNameMovies(savedMovies, text);
      if (moviesVisible.length === 0) {
        setSearchText("Ничего не найдено.");
        setIsPreloader(false);
      }
      setFilterMovies(
        shortMovie ? filterDurationMovies(moviesVisible) : moviesVisible
      );
      setIsPreloader(false);
      return;
    }
  }, [filterNameMovies, savedMovies, filterDurationMovies, shortMovie, text]);

  const handleDelete = ({ _id: id }) => {
    onDeleteMovie(id);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm onChange={handleCheckbox} onSubmit={handleSearchMovies} />
        {isPreloader ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList
              onClick={handleDelete}
              movies={filterMovies}
              searchText={searchText}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
