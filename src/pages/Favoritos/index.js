import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@favoritos");
    setFavoritos(JSON.parse(minhaLista) || []);
  }, []);

  function excluirfavorito(id) {
    const filtrados = favoritos.filter((itens) => itens.id !== id);

    setFavoritos(filtrados);
    localStorage.setItem("@favoritos", JSON.stringify(filtrados));
    toast.success("Deletado de sua lista!");
  }

  return (
    <div className="meus-filmes">
      <h1>Meus favoritos</h1>
      <div className="minha-lista">
        <ul>
          {favoritos.map((item) => (
            <div key={item.id}>
              <li>
                <span className="title-fav">{item.title}</span>

                <div className="meus-botoes">
                  <span className="link">
                    <Link to={`/Filmes/${item.id}`}>Ver detalhes</Link>
                  </span>
                  <button
                    onClick={() => {
                      excluirfavorito(item.id);
                    }}
                  >
                    excluir
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
