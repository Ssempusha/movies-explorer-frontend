import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="header__nav">
      <NavLink
        exact="true"
        to="/movies"
        className={({ isActive }) =>
          isActive ? "header__nav-link-active" : "header__nav-link"
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) =>
          isActive ? "header__nav-link-active" : "header__nav-link"
        }
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default Navigation;
