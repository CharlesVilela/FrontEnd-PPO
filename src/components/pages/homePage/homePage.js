import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBarComponet from "../../layout/navbar/navbar-layout";
import FooterComponent from "../../layout/footer/footer-layout";
import Login from "../../pages/login/login";

const HomePage = function () {
  return (
    <>
      <NavBarComponet />
      <h1>Olá mundo!</h1>
    </>
  );
};

export default HomePage;
