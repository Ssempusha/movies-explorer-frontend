import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import lensImg from "../../images/lens-grey.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { useLocation } from "react-router";

function SearchForm({ onSubmit, isShortMovie, onChange }) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === "/saved-movies";
  const [values, setValues] = useState({});

  useEffect(() => {
    if (!isSavedMoviesPage) {
      const savedSearch = localStorage.getItem("request");
      if (savedSearch) {
        setValues({ searchFilm: savedSearch });
      }
    } else {
      setValues("");
    }
  }, [isSavedMoviesPage, setValues]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    onSubmit(values.searchFilm, isShortMovie);
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__block">
          <form className="search-form__form" onSubmit={handleSearch}>
            <div className="search-form__form-container">
              <img className="search-form__lens" alt="Лупа" src={lensImg}></img>
              <input
                id="search-film"
                required
                className="search-from-input"
                type="text"
                placeholder="Фильм"
                name="searchFilm"
                value={values.searchFilm || ""}
                onChange={handleChange}
              />
            </div>
            <div className="search-form__button-container">
              <button type="submit" className="search-form__button"></button>
            </div>
          </form>
          <FilterCheckbox onChange={onChange} value={isShortMovie} />
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
