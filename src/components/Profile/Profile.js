import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, Юлия!</h1>
            <form className="profile__form">
              <div className="profile__input-container">
                <label className="profile__inscription" for="profile-name">
                  Имя
                </label>
                <input
                  id="profile-name"
                  required
                  className="profile__input"
                  type="text"
                  placeholder="Имя"
                  defaultValue="Юлия"
                  name="name"
                  minLength="2"
                  maxLength="30"
                />
              </div>
              <div className="profile__input-container">
                <label className="profile__inscription" for="profile-email">
                  E-mail
                </label>
                <input
                  id="profile-email"
                  required
                  className="profile__input"
                  type="email"
                  placeholder="E-mail"
                  defaultValue="julia@mail.ru"
                  name="email"
                />
              </div>
              <button type="button" className="profile__button-edit">
                Редактировать
              </button>
            </form>
            <Link to="/" className="profile__button-exit">
              Выйти из аккаунта
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
