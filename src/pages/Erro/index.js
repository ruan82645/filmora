import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import fightclub from "../../Assets/pics/fightclub.jpg";

function Erro() {
  return (
    <div className="errorcontainer">
      <h1 className="title">Opa, parece que essa página não existe!</h1>
      <h3 className="subtitle">Volte e assista alguns filmes :)</h3>
      <div className="retorno">
        <img className="fightclub" src={fightclub} />
        <Link to="/">
          <h1 className="retornar">RETORNAR</h1>
        </Link>
      </div>
      <h2 className="rule">
        {" "}
        "The first rule about fight club is: You do not talk about fight club."
      </h2>
    </div>
  );
}

export default Erro;
