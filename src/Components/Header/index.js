import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        FILMORA
      </Link>

      <Link to="/Favoritos" className="favoritos">
        filmes
      </Link>
    </header>
  );
}

export default Header;
