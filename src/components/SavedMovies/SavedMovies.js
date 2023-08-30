import React, { useState } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";

function Movies() {
  const [isPreloader, setIsPreloader] = useState(false);
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <section className="saved-movies">
          {isPreloader ? (
            <Preloader />
          ) : (
            <>
              <ul className="saved-movies__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
              </ul>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
