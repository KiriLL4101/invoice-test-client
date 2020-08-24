import React from "react";
import { NavLink } from "react-router-dom";

import "../style/header.scss";
import logoSvg from '../assets/logo.svg'

export default function Header({ logout }) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoSvg} alt="logo"/>
      </div>
      <ul className="header__menu">
        <li>
          <NavLink to="/terminals">Terminals</NavLink>
        </li>
        <li>
          <NavLink to="/buyers">Buyers</NavLink>
        </li>
        <li>
          <a href="/" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </header>
  );
}
