import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBarCom = ({ showForm }) => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand onClick={showForm}>
          Click here to write a note!
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarCom;
