//  Add icon to name
import React from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../../Variables.css'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
     <Navbar collapseOnSelect  expand="lg" className="mb-3">
          <Container>
            <Navbar.Brand  href="#home">CodeIT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ml-auto">
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/Landing">Signup</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
};

export default NavigationBar;