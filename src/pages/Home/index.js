import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import "./style.css";

//https://api.themoviedb.org/3/movie/now_playing?api_key=c634b4775a037a56f5dd2baf3951c4e8&language=pt-br

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadingfilmes() {
    const response = await api.get("movie/now_playing", {
      params: {
        page: 1,
      },
    });

    function load() {
      setLoading(false);
    }

    setFilmes(response.data.results);
    setTimeout(load, 1000);

    console.log(response.data.results);
  }

  useEffect(() => {
    loadingfilmes();
  }, []);

  if (loading) {
    return (
      <div className="container">
        {filmes.map((filmes) => (
          <article className="falsolista" key={filmes.id}>
            <strong className="falsotitulo">Carregando...</strong>
            <div className="falsoimage" />
          </article>
        ))}
      </div>
    );
  }
  return (
    <div className="father">
      <div className="container">
        {filmes.map((filmes) => (
          <article className="lista" key={filmes.id}>
            <strong title={filmes.title} className="titulo">
              {filmes.title}
            </strong>
            <img
              className="image"
              src={`https://image.tmdb.org/t/p/w500/${filmes.backdrop_path}`}
              alt={filmes.title}
            />
            <Link className="link" to={`/Filmes/${filmes.id}`}>
              Acessar
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
