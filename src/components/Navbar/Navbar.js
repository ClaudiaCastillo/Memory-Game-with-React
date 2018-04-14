import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Pupster
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" || window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li className={window.location.pathname === "/discover" ? "active" : ""}>
          <Link to="/discover">Discover</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

<nav class="navbar">
      <ul>
        <li class="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li class="">You guessed correctly!</li>
        <li>Score: 1 | Top Score: 1</li>
      </ul>
    </nav>