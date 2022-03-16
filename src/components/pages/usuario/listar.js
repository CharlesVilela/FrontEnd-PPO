import React, { useEffect, useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";

import api from "../../../configuracao/axios";

const ListaUsuarios = function () {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadUsuarios() {
      const response = await api.get("/usuario/listar");
      console.log(response.data);
      setUsuarios(response.data);
    }
    loadUsuarios();
  }, []);

  return (
    <>
      <ListGroup>
        {usuarios.map((row) => (
          <ListGroup.Item>{row.email}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaUsuarios;
