import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Impact from './Impact'
class Navbarr extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Nuit d'info App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/impact">Impact</Nav.Link>
            <Nav.Link href="/ressources">Ressources</Nav.Link>
            <Nav.Link href="/solutions">Solutions</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbarr;
