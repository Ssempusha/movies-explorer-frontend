import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              className="portfolio__item-link"
              href="https://ssempusha.github.io/how-to-learn/"
              target="blank"
            >
              <p className="portfolio__link-text">Статичный сайт</p>
              <img
                className="portfolio__link-arrow-img"
                src={arrow}
                alt="стрелочка"
              />
            </a>
{/*             <a
              className="portfolio__arrow-link"
              href="https://ssempusha.github.io/how-to-learn/"
              target="blank"
            >
              <img
                className="portfolio__arrow-img"
                src={arrow}
                alt="стрелочка"
              />
            </a> */}
          </li>
          <li className="portfolio__item">
          <a
              className="portfolio__item-link"
              href="https://ssempusha.github.io/russian-travel/"
              target="blank"
            >
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <img
                className="portfolio__link-arrow-img"
                src={arrow}
                alt="стрелочка"
              />
            </a>
            {/* <a
              className="portfolio__link"
              href="https://ssempusha.github.io/russian-travel/"
              target="blank"
            >
              Адаптивный сайт
            </a>
            <a
              className="portfolio__arrow-link"
              href="https://ssempusha.github.io/russian-travel/"
              target="blank"
            >
              <img
                className="portfolio__arrow-img"
                src={arrow}
                alt="стрелочка"
              />
            </a> */}
          </li>
          <li className="portfolio__item">
          <a
              className="portfolio__item-link"
              href="https://ssempusha.github.io/react-mesto-auth/"
              target="blank"
            >
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <img
                className="portfolio__link-arrow-img"
                src={arrow}
                alt="стрелочка"
              />
            </a>
{/*             <a
              className="portfolio__link"
              href="https://ssempusha.github.io/react-mesto-auth/"
              target="blank"
            >
              Одностраничное приложение
            </a>
            <a
              className="portfolio__arrow-link"
              href="https://ssempusha.github.io/react-mesto-auth/"
              target="blank"
            >
              <img
                className="portfolio__arrow-img"
                src={arrow}
                alt="стрелочка"
              />
            </a> */}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
