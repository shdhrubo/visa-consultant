import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Visa Consultant</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home#services">Services</Nav.Link>
          <Nav.Link href="home#reviews">Reviews</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
