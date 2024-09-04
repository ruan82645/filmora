import React from "react";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

export default function Filme() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  async function loadfilme() {
    await api
      .get(`movie/${id}`)

      .then((resposta) => {
        setFilme(resposta.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        navigate("/", { replace: true });
        setLoading(false);
      });
  }

  useEffect(() => {
    loadfilme();
  }, [id, navigate]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@favoritos");

    let FilmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilmes = FilmesSalvos.some((meusFilmes) => {
      return meusFilmes.id === filme.id;
    });

    if (hasFilmes) {
      alert("Esse filme já está na lista");
      return;
    }

    FilmesSalvos.push(filme);
    localStorage.setItem("@favoritos", JSON.stringify(FilmesSalvos));
    alert("Filme salvo com sucesso!");
  }

  if (loading) {
    return <h1>Carregando filme...</h1>;
  }

  return (
    <div className="container2">
      <div className="containerfoto">
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1.5",
            overflow: "hidden",
            borderRadius: "8px",
            backgroundColor: "red",
            border: "2px solid grey",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
          />
        </div>
      </div>
      {/**/}
      {/**/}
      {/*Aqui abaixo é o container de informações gerais sobre o filme*/}
      <div className="containerinfo">
        <h1>{filme.title}</h1>
        {/**/}
        {/*Container de generos*/}
        <span className="genres">
          {filme.genres.map((genres) => {
            return (
              <article key={genres.id}>
                <h4>{genres.name}</h4>
              </article>
            );
          })}
        </span>
        {/**/}
        {/*Container de votação*/}
        <span className="vote">
          <h5>Avaliação geral: {filme.vote_average.toFixed(1)} / 10</h5>
        </span>
        {/**/}
        <span className="sinopse">
          <h3>Sinopse</h3>
          <p>{filme.overview}</p>
        </span>
        {/**/}
        {/*Container de botoes*/}
        <span className="containerbutton">
          <a
            className="trailer"
            target="_blank"
            rel="external"
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
              filme.title
            )}+Trailer`}
          >
            Assistir ao Trailer
          </a>
          <button className="addfav" onClick={salvarFilme}>
            Add aos favoritos
          </button>
        </span>
      </div>
      {/**/}
      {/**/}
      {/*Aqui abaixo é o container dos produtores*/}
      <div className="containerProduction">
        {filme.production_companies.map((producao) => {
          return <p className="production">{producao.name}</p>;
        })}
      </div>
    </div>
  );
}
