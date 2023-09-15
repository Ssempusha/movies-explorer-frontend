import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, value }) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label" htmlFor="film-checkbox">
        <button
          className={!value ? "filter-checkbox__unactive" : "filter-checkbox__active"}
          type="submit"
          id="film-checkbox"
          onClick={onChange}
        />
        <p className="filter-checkbox__text">Короткометражки</p>
      </label>
    </div>
  );
}

export default FilterCheckbox;
