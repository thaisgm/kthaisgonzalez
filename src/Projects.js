import React from 'react';
import SFLogo from './SFCity.png';
import GifterLogo from './gifterLogo.png';
import BingeBuddyLogo from './BingeBuddyLogo.png';
import Button from 'react-bootstrap/Button';
import { Fade } from 'react-slideshow-image';
import './Projects.css';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import BingeBuddy from './BingeBuddy';
import SFSchool from './SFSchool';
import Gifter from './Gifter';

const fadeProperties = {
  duration: 7000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}

const ProjectsPage = () => {
  return (
    <div className="Projects">
      <Router>
      <Switch>
        <Route path="/overview"> <ProjectsOverview/> </Route>
        <Route exact path="/bingebuddy"> <BingeBuddy/> </Route>
        <Route exact path="/sfschoolfinder"> <SFSchool/> </Route>
        <Route exact path="/gifter"> <Gifter/> </Route>
      </Switch>
    </Router>
    </div>
  )
}

function ProjectsOverview() {
  return(
  <Fade {...fadeProperties}>
    <div className="each-fade">
      <div className="image-container">
        <img src={SFLogo} style={{width:'100%'}} />
      </div>
      <div className="text-container">
        <h2>SF School Finder</h2>
        <p>SF School Finder aimed to improve the current school assignment form, which was a tedious and inaccesible task for minority and single parent homes. As a result, students were often placed in their local school, leading to a continuous cycle of minority students being placed in lower-performing schools. We built a website that better allowed families to pursue the best educational opportunity.</p>
        <LinkContainer to="/sfschoolfinder"><Button className="learnMore" variant="primary"> Learn More...</Button></LinkContainer>
      </div>
    </div>
    <div className="each-fade">
      <div className="image-container">
        <img src={GifterLogo} />
      </div>
      <div className="text-container">
        <h2>Gifter</h2>
        <p>Gifter is a mobile application I worked on during a mini-hackathon. Our goal was to come up with something light-hearted and creative. We decided to build an app that allowed you to send funny, random messages to your friends. Our vision was an expansion of the popularity of emoticons by sending something more significant: a uniquely curated, one-of-a-kind content text message.</p>
        <LinkContainer to="/gifter"><Button className="learnMore" variant="primary"> Learn More...</Button></LinkContainer>
      </div>
    </div>
    <div className="each-fade">
      <div className="image-container">
        <img src={BingeBuddyLogo} />
      </div>
      <div className="text-container">
        <h2>Binge Buddy</h2>
        <p>Binge Buddy is a mobile application I worked on during a senior year college project. The app combines the best features of popular social media platforms and IMDB. It allows cinema and TV fans to share reviews and recommendations to their friends. It socializes the movie and TV show review processs, hopefully encouraging people to try new shows and watch something besides the Office.</p>
        <LinkContainer to="/BingeBuddy"><Button className="learnMore" variant="primary"> Learn More...</Button></LinkContainer>
      </div>
    </div>
  </Fade>
)
}

export default ProjectsPage;
