import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import loginLogo from "../../images/logo.svg";
import useForm from "../../hooks/useFormValidation";

function Login({ onLogin, renderLoading, success, submitStatus }) {
  const { handleChange, errors, data, isValid } = useForm();
  const [isSubmit, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(data.email, data.password);
  }

  return (
    <main>
      <section className="login">
        <div className="login__container">
          <Link className="login__logo-link" to="/">
            <img className="login__logo" src={loginLogo} alt="Логотип" />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <form className="login__form" noValidate onSubmit={handleSubmit}>
            <label className="login__inscription" htmlFor="login-email">
              E-mail
            </label>
            <input
              id="login-email"
              required
              className="login__input"
              type="email"
              placeholder="E-mail"
              defaultValue=""
              name="email"
              onChange={handleChange}
            />
            <span className="login__error">{errors.email}</span>
            <label className="login__inscription" htmlFor="login-password">
              Пароль
            </label>
            <input
              id="login-password"
              required
              className="login__input"
              type="password"
              placeholder="Пароль"
              name="password"
              minLength="8"
              maxLength="30"
              defaultValue=""
              onChange={handleChange}
            />
            <span className="login__error">{errors.password}</span>
            <div className="login__button-container">
              {isSubmit && (
                <span
                  className={`${
                    success ? "login__submit-success" : "login__submit-error"
                  }`}
                >
                  {submitStatus}
                </span>
              )}
              <button
                type="submit"
                className="login__button"
                disabled={!(isValid.email && isValid.password)}
                onClick={() => setSubmit(true)}
              >
                {renderLoading}
              </button>
            </div>
          </form>
          <p className="login__question">
            Ещё не зарегистрированы?{" "}
            <Link to="/signup" className="login__register-link">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
