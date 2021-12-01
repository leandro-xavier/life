import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';

export const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Life Aplication</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Aplicacion</Nav.Link>
      <Nav.Link href="#pricing">About this</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/auth/login">Login</Nav.Link>
      <Nav.Link as={Link} to="/auth/register">Register</Nav.Link>
  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
