import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home geral</h1>
      <Link to="/Filmes">Filmes</Link>
    </div>
  );
}

export default Home;
