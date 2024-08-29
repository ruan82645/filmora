import React from "react";
import { Link } from "react-router-dom";

function Erro() {
  return (
    <div>
      <h1>Opa, parece que não encontrei essa página</h1>
      <Link to="/">Home</Link>
      <Link to="/Filmes">Filmes</Link>
    </div>
  );
}

export default Erro;
