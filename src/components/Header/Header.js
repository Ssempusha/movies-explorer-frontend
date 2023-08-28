import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import buttonAccountIcon from "../../images/button-account-icon.svg";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";

function Header() {
  const location = useLocation();

  // временное переключение залогиненности вручную
  const [islogin, setIsLogin] = useState(true);

  const headerRoute = () => {
    return location.pathname === "/";
  };

  const backgroundColorHeader = {
    backgroundColor: headerRoute() ? "#DDDEE3" : "#FAFAFA",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerState = islogin ? (
    <nav className="header__navigation-container">
      <Navigation />
      <Link className="header__account-button" to="/profile">
        <img
          className="header__icon-button-account"
          src={buttonAccountIcon}
          alt="Иконка входа в аккаунт"
        />
        <p className="header__account-button-text">Аккаунт</p>
      </Link>
      <button
        type="button"
        className={`header__burger-menu ${
          isMenuOpen ? "header__burger-menu_unactive" : ""
        }`}
        onClick={toggleMenu}
      />
      {isMenuOpen ? <BurgerMenu handleClose={toggleMenu} /> : ""}
    </nav>
  ) : (
    <nav className="header__auth-links">
      <Link className="header__link-signup" to="/signup">
        Регистрация
      </Link>
      <Link className="header__button-signin" to="/signin">
        Войти
      </Link>
    </nav>
  );

  return (
    <header className="header" style={backgroundColorHeader}>
      <div className="header__container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src={headerLogo} alt="Логотип" />
        </Link>
        {headerState}
      </div>
    </header>
  );
}

export default Header;
