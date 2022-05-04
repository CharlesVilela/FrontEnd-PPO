import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/homePage/homePage";
import CadastrarUsuario from "./components/pages/usuario/cadastro";
import ListarUsuario from "./components/pages/usuario/listar";
import PageApp from "./components/pages/pageApp/pageApp";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageApp" element={<PageApp />} />
        <Route path="/usuario/cadastrar" element={<CadastrarUsuario />} />
        <Route path="/usuario/listar" element={<ListarUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
