import React from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../../../components/imagens/logo.png";

const NavBarComponet = function () {
  return (
    <>
      <NavBar className="nav-bar-style" expand="lg">
        <container>
          <NavBar.Brand href="/"></NavBar.Brand>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />

          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/usuario/cadastrar"></Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </container>
      </NavBar>
    </>
  );
};

export default NavBarComponet;
