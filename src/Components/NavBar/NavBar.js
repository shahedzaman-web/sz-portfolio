import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">Md. Shaheduzzaman</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link>About</Link>
          <Nav.Link className="col-md-2" href="#pricing">
            Pricing
          </Nav.Link>

          <Nav.Link className="col-md-2" href="#deets">
            More deets
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
