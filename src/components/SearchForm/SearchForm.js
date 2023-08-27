import React from "react";
import "./SearchForm.css";
import lensImg from "../../images/lens-grey.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <div className="search-form__block">
          <form className="search-form__form">
            <div className="search-form__form-container">
              <img className="search-form__lens" alt="Лупа" src={lensImg}></img>
              <input
                id="search-film"
                required=""
                className="search-from-input"
                type="text"
                placeholder="Фильм"
                defaultValue=""
                name="searchFilm"
              />
            </div>
            <div className="search-form__button-container">
              <button type="submit" className="search-form__button"></button>
            </div>
          </form>
          <FilterCheckbox />
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
