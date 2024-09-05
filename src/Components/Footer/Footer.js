import React from "react";
import "./footer.css";
import FilmoraLogo from "../../Assets/pics/FilmoraLogo.png";
import Gmail_icon from "../../Assets/pics/Gmail_icon.png";

export default function Footer() {
  return (
    <div className="containerfooter">
      <footer>
        <div className="contato">
          <h3>CONTATO</h3>
          <ul>
            <li>Gmail</li>
            <li>LinkedIN</li>
            <li>gitHub</li>
          </ul>
        </div>
        <div className="logofooter">
          <img src={FilmoraLogo} alt="logo" />
        </div>
        <div className="desenvolvido">
          <h3>Desenvolvido por:</h3>
          <h4>Ruan Pablo Alves</h4>
        </div>
      </footer>
    </div>
  );
}
