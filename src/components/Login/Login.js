import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import loginLogo from "../../images/logo.svg";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Link className="login__logo-link" to="/">
          <img className="login__logo" src={loginLogo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <p className="login__inscription">E-mail</p>
          <input
            id="login-email"
            required=""
            className="login__input"
            type="email"
            placeholder=""
            defaultValue=""
            name="email"
          />
          <p className="login__inscription">Пароль</p>
          <input
            id="loginr-password"
            required=""
            className="login__input"
            type="password"
            placeholder=""
            defaultValue=""
            name="password"
            minLength="8"
          />

          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <p className="login__question">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="login__register-link">
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
