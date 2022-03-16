import { React, useState } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import api from "../../../configuracao/axios";

import pageApp from "../../layout/pageAppLayout/page-app-layout";

// style={{ background: "#636057" }}

const Login = function () {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogar() {
    const usuario = {
      email: email,
      senha: senha,
    };

    const response = await api.post("/logar", usuario);

    console.log(response.data);

    if (response != null) {
      window.location.href = "/pageApp";
      pageApp.usuarioLogado(response.data);
    } else {
      alert("Error ao Logar o usuario!");
    }
  }

  return (
    <>
      <Card className="login-card">
        <h1 style={{ color: "white" }}>Entrar</h1>
        <Card.Body>
          <form>
            <div>
              <input
                className="input-login-style"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="input-login-style"
                type="password"
                placeholder="Senha"
                min="8"
                max="16"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div>
              <Button
                className="button-login-style"
                onClick={handleLogar}
                // href="/pageApp"
              >
                Logar
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
