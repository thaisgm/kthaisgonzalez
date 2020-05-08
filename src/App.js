import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#graphicDesign">Graphic Design</Nav.Link>
        <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/4.1">Projects Overview</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/4.2">Binge Buddy</NavDropdown.Item>
          <NavDropdown.Item href="#action/4.3">San Francisco School Finder</NavDropdown.Item>
          <NavDropdown.Item href="#action/4.4">Gifter</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
