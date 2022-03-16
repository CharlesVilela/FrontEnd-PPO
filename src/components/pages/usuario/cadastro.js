import { React, useState } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import api from "../../../configuracao/axios";

const CadastrarUsuario = function () {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  async function handleSubmit() {
    const usuario = {
      nomeUsuario: nomeUsuario,
      email: email,
      senha: senha,
    };

    console.log(usuario);

    const response = await api.post("/usuario/cadastrar", usuario);

    if (response != null) {
      window.location.href = "/";
    } else {
      alert("Error ao Cadastrar o usuario!");
    }
  }

  return (
    <>
      <Card className="cadastrar-usuario-card">
        <h1>Cadastrar-se</h1>
        <Card.Body>
          <form>
            <div>
              <input
                className="input-cadastrar-usuario-style"
                type="text"
                placeholder="Nome de Usuario"
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
              />
            </div>
            <div>
              <input
                className="input-cadastrar-usuario-style"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="input-cadastrar-usuario-style"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div>
              <input
                className="input-cadastrar-usuario-style"
                type="password"
                placeholder="Confirmar a senha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
              />
            </div>
            <div>
              <Button className="button-login-style" onClick={handleSubmit}>
                Cadastrar
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default CadastrarUsuario;
