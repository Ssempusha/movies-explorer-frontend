import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import registerLogo from "../../images/logo.svg";

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Link className="register__logo-link" to="/">
          <img className="register__logo" src={registerLogo} alt="Логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <p className="register__inscription">Имя</p>
          <input
            id="register-name"
            required=""
            className="register__input"
            type="text"
            placeholder=""
            defaultValue=""
            name="name"
            minLength="2"
            maxLength="30"
          />
          <p className="register__inscription">E-mail</p>
          <input
            id="register-email"
            required=""
            className="register__input"
            type="email"
            placeholder=""
            defaultValue=""
            name="email"
          />
          <p className="register__inscription">Пароль</p>
          <input
            id="register-password"
            required=""
            className="register__input"
            style={{ color: "#EE3465" }}
            type="password"
            placeholder=""
            defaultValue=""
            name="password"
            minLength="8"
          />
          <span className="register__error">Что-то пошло не так...</span>
          <button type="submit" className="register__button">
            Зарегистироваться
          </button>
        </form>
        <p className="register__question">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="register__login-link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
