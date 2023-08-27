import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bottom-container">
          <p className="footer__copyright">&#169; 2023</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                className="footer__link"
                href="https://practicum.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                href="https://github.com/Ssempusha"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
