import React from 'react';
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

  <Container fluid>
    <Row className="firstRow">
      <Col className="name">Thais Gonzalez</Col>
      <Col className="bio">Univerisity of Michigan Graduate</Col>
    </Row>
  </Container>
  <Container className="secondContainer">
    <Row className="secondRow">
      <span className="aboutMe"> About Me </span>
      <Row className="subRow">
        <Col>
          <Col className="experience"> My Experience </Col>
          <Col className="expParagraph"> I played 4 years of DI Softball at Michigan, collecting two BIG10 championship titles. I graduated  having majored in Business with concentrations in strategy and technology. I have past internship experience in software development and CRM technology.</Col>
        </Col>
        <Col>
          <Col className="skillset"> My Skillset </Col>
          <Col className="skillParagraph">Throughout my coursework I've studied financial management skills such as market analysis, business evaluation, and product development. Additionally, I have experience in various coding languages, primarily Javascript, HTML/CSS, React, and Node.js.</Col>
        </Col>
      </Row>
    </Row>
  </Container>
    </div>
  );
}

export default App;
