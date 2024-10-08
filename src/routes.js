import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filme from "./pages/Filme";
import Home from "./pages/Home";
import Erro from "./pages/Erro";
import Header from "./Components/Header";
import Favoritos from "./pages/Favoritos";
import Footer from "./Components/Footer/Footer";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filmes/:id" element={<Filme />} />
        <Route path="/Favoritos" element={<Favoritos />} />

        <Route path="/*" element={<Erro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterApp;
