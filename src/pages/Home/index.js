import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";

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

    console.log(response);
  }

  useEffect(() => {
    loading();
  }, []);

  return (
    <div>
      <h1>Home geral</h1>
      <Link to="/Filmes/:id">Filmes</Link>
    </div>
  );
}

export default Home;
