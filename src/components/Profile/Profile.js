import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
/* import Preloader from '../Preloader/Preloader'; */

function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Юлия!</h2>
          <form className="profile__form">
            <div className="profile__input-container">
              <p className="profile__inscription">Имя</p>
              <input
                id="profile-name"
                required=""
                className="profile__input"
                type="text"
                placeholder=""
                defaultValue="Юлия"
                name="name"
                minLength="2"
                maxLength="30"
              />
            </div>
            <div className="profile__input-container">
              <p className="profile__inscription">E-mail</p>
              <input
                id="profile-email"
                required=""
                className="profile__input"
                type="email"
                placeholder=""
                defaultValue="julia@mail.ru"
                name="email"
              />
            </div>
            <button type="button" className="profile__button-edit">
              Редактировать
            </button>
          </form>
          <button type="button" className="profile__button-exit">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
