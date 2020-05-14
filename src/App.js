import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


import Resume from './Resume';
{
  /* import GraphicDesign from './GraphicDesign';
import Projects from './Projects';
import BingeBuddy from './BingeBuddy';
import SFSchool from './SFSchool';
import Gifter from './Gifter';
*/}


function App() {
  return (
    <div className="App">
    <Router>
    <Navigation/>

    <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route path="/resume"> <Resume/> </Route>
      <Route path="/graphicdesign"> <GraphicDesign/> </Route>
      <Route path="/overview"> <Projects/> </Route>
      {/*
      <Route exact path="/bingebuddy"> <BingeBuddy/> </Route>
      <Route exact path="/sfschoolfinder"> <SFSchool/> </Route>
      <Route exact path="/gifter"> <Gifter/> </Route>
      */}
    </Switch>

  </Router>
    </div>
  );
}

function Navigation(){
  return (
    <div className="navigation">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/resume"><Nav.Link>Resume</Nav.Link></LinkContainer>
          <LinkContainer to="/graphicdesign"><Nav.Link>Graphic Design</Nav.Link></LinkContainer>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <LinkContainer to="/overview"><NavDropdown.Item>Projects Overview</NavDropdown.Item></LinkContainer>
            <NavDropdown.Divider />
            {/*
            <NavDropdown.Item href="/bingebuddy">Binge Buddy</NavDropdown.Item>
            <NavDropdown.Item href="/sfschoolfinder">San Francisco School Finder</NavDropdown.Item>
            <NavDropdown.Item href="/gifter">Gifter</NavDropdown.Item>
            */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

function Home(){
  return (
    <div className="home">
      <Container fluid>
        <Row className="firstRow">
          <Col className="name">Thais Gonzalez</Col>
          <Col className="bio">Univerisity of Michigan 2020 Graduate</Col>
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
  )
}

export default App;
