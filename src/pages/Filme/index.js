import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import "./style.css";

export default function Filme() {
  const { id } = useParams();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadfilme() {
    await api
      .get(`movie/${id}`)

      .then((resposta) => {
        setFilme(resposta.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.status_message);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadfilme();
  }, [id]);

  if (loading) {
    return <h1>Carregando filme...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container2">
      <div className="conjuntofoto">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`}
        />
        <h1 className="tituloindividual">{filme.title}</h1>
      </div>
      <br />
      <br />
      <div className="absolute">
        <div className="sinopse">
          <h3>Sinopse</h3>
          <p>{filme.overview}</p>
        </div>
        <div className="botoes2">
          <button>TRAILER</button>
          <button>FAVORITAR</button>
        </div>
        //----botoes2----
        <br />
        <br />
        <div className="info">
          <h5>Lançamento: {filme.release_date}</h5>
          <h5>
            produzido por:{" "}
            {filme.production_companies.map((production) => {
              return (
                <span className="info2" key={production.id}>
                  <p>{production.name}</p>
                </span>
              );
            })}{" "}
          </h5>
          <h5>Avaliação: {filme.vote_average.toFixed(1)} / 10</h5>
        </div>
        <br />
        <br />
        //----genres----
        <div className="genrescontainer">
          {filme.genres.map((filme, index) => {
            return (
              <article className="genres" key={index}>
                <h3>{filme.name}</h3>
              </article>
            );
          })}
        </div>
      </div>
      //----genres----
      <Link to="/">Página inicial</Link>
    </div>
  );
}
