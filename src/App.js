import React from 'react';
import logo from './logo.svg';
import background from './backgroundImage.JPG';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="main-nav">
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
  <Container fluid>
    <Row className="firstRow">
      <Col className="name">Thais Gonzalez</Col>
    </Row>
    <Row className="secondRow">
      <Col> 1 of 2</Col>
    </Row>
  </Container>
    </div>
  );
}

export default App;
