import React, { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({
  loggedIn,
  onSignOut,
  onUpdateUser,
  renderLoading,
  submitStatus,
  success,
}) {
  const emailRegex = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
  const currentUser = React.useContext(CurrentUserContext);
  const [isEdit, setEdit] = useState(false);
  const [isSave, setSave] = useState(false);
  const [isValid, setIsValid] = useState();
  const [errors, setErrors] = useState({});

  function checkValid(name, value) {
    if (name === "email") {
      if (emailRegex.test(value)) {
        setIsValid(true);
        setErrors({ ...errors, email: "" });
      } else if (value === "") {
        setIsValid(false);
        setErrors({ ...errors, email: "Введите e-mail" });
      } else {
        setIsValid(false);
        setErrors({ ...errors, email: "Некорректный e-mail" });
      }
    } else if (name === "name") {
      if (value.length >= 2 && value.length <= 30) {
        setIsValid(true);
        setErrors({ ...errors, name: "" });
      } else if (value === "") {
        setIsValid(false);
        setErrors({ ...errors, name: "Введите имя" });
      } else {
        setIsValid(false);
        setErrors({ ...errors, name: "Длина имени от 2 до 30 символов" });
      }
    }
  }

  const [user, setUser] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;
    setUser({ ...user, [name]: value });
    checkValid(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(user);
    setSave(true);
    setEdit(false);
  }


  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form className="profile__form" noValidate onSubmit={handleSubmit}>
              <div className="profile__input-container">
                <label className="profile__inscription" htmlFor="profile-name">
                  Имя
                </label>
                <input
                  id="profile-name"
                  required
                  className="profile__input"
                  type="text"
                  placeholder="Имя"
                  name="name"
                  minLength="2"
                  maxLength="30"
                  disabled={!isEdit && "disabled"}
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <span className="profile__error">{errors.name}</span>
              <div className="profile__input-container">
                <label className="profile__inscription" htmlFor="profile-email">
                  E-mail
                </label>
                <input
                  id="profile-email"
                  required
                  className="profile__input"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  disabled={!isEdit && "disabled"}
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <span className="profile__error">{errors.email}</span>
              {isEdit && (
                <div className="profile__button-container">
                  {isSave && (
                    <span
                      className={`${
                        success
                          ? "profile__submit-success"
                          : "profile__submit-error"
                      }`}
                    >
                      {submitStatus}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="profile__button-save"
                    disabled={
                      !isValid ||
                      (currentUser.name === user.name &&
                        currentUser.email === user.email)
                    }
                    onClick={() => setSave(true)}
                  >
                    {renderLoading}
                  </button>
                </div>
              )}
              {!isEdit && (
                <>
                  <button
                    type="button"
                    className="profile__button-edit"
                    onClick={() => setEdit(true)}
                  >
                    Редактировать
                  </button>
                  <button
                    type="button"
                    className="profile__button-exit"
                    onClick={onSignOut}
                  >
                    Выйти из аккаунта
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
