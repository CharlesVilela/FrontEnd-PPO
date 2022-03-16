import React from "react";

import "../footer/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const FooterComponent = function () {
  return (
    <>
      <Card className="footer-component-card">
        <Card.Header>
          <h4>Sobre</h4>
        </Card.Header>
        <Card.Body>
          <h5>Contato</h5>
          <h5>Redes</h5>
        </Card.Body>
      </Card>
    </>
  );
};

export default FooterComponent;
