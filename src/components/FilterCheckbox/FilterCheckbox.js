import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label" htmlFor="film-checkbox">
        <input
          className="filter-checkbox__checkbox"
          type="checkbox"
          id="film-checkbox"
        />
        <p className="filter-checkbox__text">Короткометражки</p>
      </label>
    </div>
  );
}

export default FilterCheckbox;
