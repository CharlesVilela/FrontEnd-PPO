import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./style.css";
import PageAppLayout from "../../layout/pageAppLayout/page-app-layout";

const PageApp = function () {
  const handleButtonClick = function (value) {
    if (value == "Broker") {
      window.location.href = "/";
    } else if (value == "Topicp") {
      window.location.href = "/usuario/cadastrar";
    }
  };
  return (
    <>
      <div className="div-barra-lateral">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/usuario/listar"
            >
              Perfil
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Meus Grupos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Meus Topicos
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Cadastrar Broker
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled">Sair</a>
          </li>
        </ul>
      </div>

      <div className="div-meus-dispositivos">
        <h1>Meus Dispositivos</h1>
      </div>

      <ul>
        <div className="div-list-dispositivos">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default PageApp;
