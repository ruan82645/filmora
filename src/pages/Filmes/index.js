import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import "./style.css";

function Filmes() {
  const { id } = useParams();

  const [filmes, setFilmes] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadFilmes() {
    await api
      .get(`movie/${id}`, {
        params: {
          api_key: "c634b4775a037a56f5dd2baf3951c4e8",
          language: "pt-BR",
        },
      })

      .then((resposta) => {
        setGenres(resposta.data.genres);
        setFilmes(resposta.data);
        setLoading(false);
      })
      .catch(() => {
        <h1>Nenhum filme encontrado</h1>;
        console.log("nenhum filme encontrado");
      });
  }

  useEffect(() => {
    loadFilmes();
  }, [id]);

  if (loading) {
    return <h1>Carregando Filmes...</h1>;
  }

  return (
    <div>
      <h1></h1>
      <h2>{filmes.title}</h2>
      <div>
        {genres.map((filmes, index) => {
          return (
            <article key={index}>
              <h3>{filmes.name}</h3>
            </article>
          );
        })}
      </div>
      <Link to="/">Página inicial</Link>
    </div>
  );
}

export default Filmes;
