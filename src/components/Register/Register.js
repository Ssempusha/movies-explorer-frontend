import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import registerLogo from "../../images/logo.svg";

function Register() {
  return (
    <main>
      <section className="register">
        <div className="register__container">
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={registerLogo} alt="Логотип" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form">
            <label className="register__inscription" for="register-name">
              Имя
            </label>
            <input
              id="register-name"
              required
              className="register__input"
              type="text"
              placeholder="Имя"
              defaultValue=""
              name="name"
              minLength="2"
              maxLength="30"
            />
            <label className="register__inscription" for="register-email">
              E-mail
            </label>
            <input
              id="register-email"
              required
              className="register__input"
              type="email"
              placeholder="E-mail"
              defaultValue=""
              name="email"
            />
            <label className="register__inscription" for="register-password">
              Пароль
            </label>
            <input
              id="register-password"
              required
              className="register__input"
              style={{ color: "#EE3465" }}
              type="password"
              placeholder="Пароль"
              defaultValue=""
              name="password"
              minLength="8"
              maxLength="30"
            />
            <label className="register__error" for="register-password">
              Что-то пошло не так...
            </label>
            <button type="submit" className="register__button">
              Зарегистрироваться
            </button>
          </form>
          <p className="register__question">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="register__login-link">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
