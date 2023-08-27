import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__nav">
        <ul className="nav-tab__nav-list">
          <li className="nav-tab__nav-item">
            <a className="nav-tab__nav-link" href="#about-project">
              О проекте
            </a>
          </li>
          <li className="nav-tab__nav-item">
            <a className="nav-tab__nav-link" href="#techs">
              Технологии
            </a>
          </li>
          <li className="nav-tab__nav-item">
            <a className="nav-tab__nav-link" href="#about-me">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
