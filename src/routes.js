import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filmes from "./pages/Filmes";
import Home from "./pages/Home";
import Erro from "./pages/Erro";
import Header from "./Components/Header";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filmes/:id" element={<Filmes />} />

        <Route path="/*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
