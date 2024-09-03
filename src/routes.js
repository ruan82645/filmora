import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filme from "./pages/Filme";
import Home from "./pages/Home";
import Erro from "./pages/Erro";
import Header from "./Components/Header";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filmes/:id" element={<Filme />} />

        <Route path="/*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
