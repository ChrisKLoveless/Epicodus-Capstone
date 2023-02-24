import React from "react";
import { NavbarBrand } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className="header mt-3">
      <Navbar bg='green-300' expand='lg'>
        <NavbarBrand href="/"><h2>Move Lab</h2></NavbarBrand>
        <Nav className="me-auto">
          <Nav.Link href="/"><h5>Profile</h5></Nav.Link>
          <Nav.Link href="/sign-in"><h5>Sign Up/Log In</h5></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;