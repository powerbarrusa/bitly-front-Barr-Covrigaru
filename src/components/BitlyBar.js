import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../images/logo.svg'

const BitlyBar = (props) => {

  return (
  <div className="App">
    <Navbar expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="nav-link" href="#tour">TOUR</Nav.Link>
          <Nav.Link className="nav-link" href="#enterprise">ENTERPRISE</Nav.Link>
          <Nav.Link className="nav-link" href="#resources">RESOURCES</Nav.Link>
          <Nav.Link className="nav-link" href="#about">ABOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default BitlyBar