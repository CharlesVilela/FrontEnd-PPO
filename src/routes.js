import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/homePage/homePage";
import CadastrarUsuario from "./components/pages/usuario/cadastro";
import PageApp from "./components/pages/pageApp/pageApp";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario/cadastrar" element={<CadastrarUsuario />} />
        <Route path="/pageApp" element={<PageApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
