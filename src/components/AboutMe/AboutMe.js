import React from "react";
import "./AboutMe.css";
import myPhoto from "../../images/photo-me.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__container-info">
          <div className="about-me__text-block">
            <h3 className="about-me__name">Юлия</h3>
            <p className="about-me__job">Фронтенд-разработчик, 23 года</p>
            <p className="about-me__info">
              Я родилась и живу в Москве. Люблю играть в компьютерные игры,
              смотреть интересные фильмы, и обычно я за любой позитивный движ.
              Учёба в Яндекс Практикум является важной первой ступенькой к моей
              мечте стать веб-разработчицей, чтобы дарить миру интернета
              качественный и актуальный продукт. Всё самое интересное впереди, и
              всё получится!
            </p>
            <a
              className="about-me__link"
              href="https://github.com/Ssempusha"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img
            className="about-me__photo"
            src={myPhoto}
            alt="фото разработчика"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
