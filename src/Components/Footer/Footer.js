import React from "react";
import "./footer.css";
import FilmoraLogo from "../../Assets/pics/FilmoraLogo.png";
import Gmail_icon from "../../Assets/pics/Gmail_icon.png";
import linkedin from "../../Assets/pics/linkedin.jpg";
import github_logo from "../../Assets/pics/github_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  function copiarEmail() {
    navigator.clipboard.writeText("ruanpabloalves82645@gmail.com");
  }

  return (
    <div className="containerfooter">
      <footer>
        <div className="contato">
          <h3>CONTATO</h3>
          <ul>
            <li>
              <img className="gmail" src={Gmail_icon} alt="gmail_icon" />
              <p className="email" onClick={copiarEmail}>
                Gmail
              </p>
            </li>
            <li>
              <img className="linkedin" src={linkedin} alt="linkdin" />
              <p>
                <a href={"https://www.linkedin.com/in/ruan-pablo-72b196215/"}>
                  LinkedIn
                </a>
              </p>
            </li>
            <li>
              <img className="github" src={github_logo} alt="github" />
              <a href={"https://github.com/ruan82645"}>
                <p>gitHub</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="logofooter">
          <Link className="Linkhomefooter" to="/">
            <img className="logofoot" src={FilmoraLogo} alt="logo" />
          </Link>
        </div>
        <div className="desenvolvido">
          <h3>Desenvolvido por:</h3>
          <h2>Ruan Pablo Alves</h2>
        </div>
      </footer>
    </div>
  );
}
