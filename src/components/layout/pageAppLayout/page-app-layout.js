import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const PageAppLayout = function () {
  function usuarioLogado(value) {
    console.log(value);
  }

  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default PageAppLayout;
