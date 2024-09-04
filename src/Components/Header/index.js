import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import FilmoraLogo from "../../Assets/pics/FilmoraLogo.png";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={FilmoraLogo} />
      </Link>

      <Link to="/Favoritos" className="favoritos">
        favoritos
      </Link>
    </header>
  );
}

export default Header;
