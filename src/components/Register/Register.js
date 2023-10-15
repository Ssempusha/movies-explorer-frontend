import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import registerLogo from "../../images/logo.svg";
import useForm from "../../hooks/useFormValidation";

function Register({ onRegister, renderLoading, success, submitStatus }) {
  const { handleChange, errors, data, isValid } = useForm();
  const [isSubmit, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(data.name, data.email, data.password);
  }

  return (
    <main>
      <section className="register">
        <div className="register__container">
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={registerLogo} alt="Логотип" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form" noValidate onSubmit={handleSubmit}>
            <label className="register__inscription" htmlFor="register-name">
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
              onChange={handleChange}
            />
            <span className="register__error">{errors.name}</span>
            <label className="register__inscription" htmlFor="register-email">
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
              onChange={handleChange}
            />
            <span className="register__error">{errors.email}</span>
            <label
              className="register__inscription"
              htmlFor="register-password"
            >
              Пароль
            </label>
            <input
              id="register-password"
              required
              className="register__input"
              type="password"
              placeholder="Пароль"
              defaultValue=""
              name="password"
              minLength="8"
              maxLength="30"
              onChange={handleChange}
            />
            <span className="register__error">{errors.password}</span>
            <div className="register__button-container">
              {isSubmit && (
                <span
                  className={`${
                    success
                      ? "register__submit-success"
                      : "register__submit-error"
                  }`}
                >
                  {submitStatus}
                </span>
              )}
              <button
                type="submit"
                className="register__button"
                disabled={!(isValid.name && isValid.email && isValid.password)}
                onClick={() => setSubmit(true)}
              >
                {renderLoading}
              </button>
            </div>
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
