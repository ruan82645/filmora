import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import "./style.css";

//https://api.themoviedb.org/3/movie/now_playing?api_key=c634b4775a037a56f5dd2baf3951c4e8&language=pt-br

function Home() {
  const [filmes, setFilmes] = useState([]);

  async function loading() {
    const response = await api.get("movie/now_playing", {
      params: {
        api_key: "c634b4775a037a56f5dd2baf3951c4e8",
        language: "pt-BR",
        page: 1,
      },
    });

    let finalFilms = response.data.results;
    setFilmes(finalFilms);

    console.log(response.data.results);
  }

  useEffect(() => {
    loading();
  }, []);

  return (
    <div className="container">
      {filmes.map((filmes) => (
        <article className="lista" key={filmes.id}>
          <strong className="titulo">{filmes.title}</strong>
          <img
            className="image"
            src={`https://image.tmdb.org/t/p/w500/${filmes.poster_path}`}
            alt={filmes.title}
          />
          <Link className="link" to={`/Filmes/${filmes.id}`}>
            Acessar
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Home;
