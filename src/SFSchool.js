import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import HackTeam from './GIThackteam.jpg';
import SFDiagram from './SFDiagram.png';
import QuizPage from './QuizPage.png';
import HomePageSpanish from './HomePageSpanish.png';
import SchoolResults from './School Results.png'

function SFSchool() {
  return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          San Francisco School Finder
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-4">
          A website designed to help parents fill out the SF public school assignment
          form so they can ensure their children are enrolled in the best school for their needs. Click
          through our process below.
        </p>
        <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        interval={5000}
        pause="hover"
        touch={true}
        >
        <MDBCarouselInner style={{marginBottom:"7%"}}>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block"
                src={HackTeam}
                alt="First slide"
                style={{width:"100%", height:"65vh", alignSelf: "center"}}
              />
            <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption style={{backgroundColor:"rgba(46, 65, 116, 0.8)"}}>
              <h5 className="h5-responsive" style={{fontWeight:"bold", fontSize:"2.5vh"}}>Project Inception</h5>
              <p style={{fontSize:"1.75vh"}}>In 2018, I attended a hackathon focused on coming up with technical solutions to Bay Area issues. After listening to a member of SF's Board of Education speak on the problems immigrant and lower-income families had with the current school assignment form, we decided to build a website to alleviate these pains and minimize the education gap currently growing in the Bay Area.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={SFDiagram}
                alt="Second slide"
                style={{width:"100%", height:"65vh", alignSelf: "center"}}
              />
            <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={QuizPage}
                alt="Third slide"
                style={{width:"100%", height:"65vh", alignSelf: "center"}}
              />
            <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption style={{backgroundColor:"rgba(46, 65, 116, 0.8)"}}>
              <h5 className="h5-responsive" style={{fontWeight:"bold", fontSize:"2.5vh"}}> Project Execution</h5>
              <p style={{fontSize:"1.75vh"}}>We came up with a quiz for parents to take in order to rank the importance of certain criteria like distance, after school programs, etc. We didn't want the quiz to appear like yet another form, so we designed a fun UX with simple and short questions.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={HomePageSpanish}
                alt="Fourth slide"
                style={{width:"100%", height:"65vh", alignSelf: "center"}}
              />
            <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption style={{backgroundColor:"rgba(46, 65, 116, 0.8)"}}>
              <h5 className="h5-responsive" style={{fontWeight:"bold", fontSize:"2.5vh"}}> Project Execution</h5>
              <p style={{fontSize:"1.75vh"}}>So parents from any of SF's diverse communities were able to use our application, we implemented the Google Translate API. This allowed our website to be available in any language, an important issue that many parents faced when researching public schools for their children.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block"
                src={SchoolResults}
                alt="Fifth slide"
                style={{height:"65vh", alignSelf: "center", marginLeft:"30%"}}
              />
            <MDBMask overlay="black-light"/>
            </MDBView>
            <MDBCarouselCaption style={{backgroundColor:"rgba(46, 65, 116, 0.8)"}}>
              <h5 className="h5-responsive" style={{fontWeight:"bold", fontSize:"2.5vh"}}> Project Execution</h5>
              <p style={{fontSize:"1.75vh"}}>The algorithm we developed took the responses of the parents and multiplied them against the initial rankings we gave the schools. Then, we ordered a list based on which schools most resembled the preferences of the parents. We made sure to include key information about the school on the list page, so the parents could scroll through efficiently.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBContainer>
    );
  }

export default SFSchool;
