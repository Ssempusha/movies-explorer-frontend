import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import buttonAccountIcon from "../../images/button-account-icon.svg";

function BurgerMenu({ handleClose }) {
  return (
    <div className="burger-menu">
      <div className="burger-menu__container">
        <button
          className="burger-menu__close-button"
          onClick={handleClose}
          type="button"
        ></button>
        <nav className="burger-menu__nav">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive ? "burger-menu__link-active" : "burger-menu__link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "burger-menu__link-active" : "burger-menu__link"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive ? "burger-menu__link-active" : "burger-menu__link"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="burger-menu__account-button">
          <img
            className="burger-menu__icon-button-account"
            src={buttonAccountIcon}
            alt="Иконка входа в аккаунт"
          />
          <p className="burger-menu__account-button-text">Аккаунт</p>
        </Link>
      </div>
    </div>
  );
}

export default BurgerMenu;
