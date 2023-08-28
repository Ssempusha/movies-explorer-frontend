import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__description-container">
          <div className="about-project__description-block">
            <h3 className="about-project__description-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__description-block">
            <h3 className="about-project__description-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__time-container">
          <div className="about-project__time-block about-project__time-block-backend">
            <p className="about-project__time-text about-project__time-text-backend">
              1 неделя
            </p>
            <p className="about-project__description">Back-end</p>
          </div>
          <div className="about-project__time-block about-project__time-block-frontend">
            <p className="about-project__time-text about-project__time-text-frontend">
              4 недели
            </p>
            <p className="about-project__description">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
