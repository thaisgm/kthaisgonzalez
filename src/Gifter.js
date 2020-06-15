import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem,
  MDBView, MDBMask, MDBContainer } from "mdbreact";
import GifterHome from './GifterDemohome.png';
import GifterMain from './GifterMainScreenDemo.png';
import Fuzzies from './fuzzies.png';
import Twillio from './twillio.png';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const Gifter = () => {
  return (
    <div className="slide-container">
    <h2 style={{fontSize:"5vh", marginTop:'0.75%'}}>Gifter</h2>
    <p className="text-center w-responsive" style={{fontSize:"2.25vh", margin:'0.5%', marginLeft:'10%', marginRight:'10%'}}>
    A mobile application designed to expand upon the popularity of emoticons by sending
    something more significant to your friends: a uniquely curated text message with
    light hearted and one-of-a-kind content.
    </p>
      <Fade {...fadeProperties} style={{marginTop:'-7%'}}>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={GifterHome} style={{width:'80%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Project Inception</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>Gifter is an mobile app I made in a group with two other developers.
            We wanted to build the app utilizing both our creative backgrounds (in graphic design and writing) and
            our knowledge of React Native. We finished working in less than a day and truly enjoyed branching
            out and using other passions and skills beyond coding.</p>
          </div>
        </div>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={GifterMain} style={{width:'90%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Project Execution</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>When you open Gifter, you are greeted by a screen with
            bright colors and 6 categories. These are labelled Joke, Fortune, Flirt, Fuzzies, Mike-ism
            (dedicated to a group member), and Roast. I was in charge of app development, and I
            used flexbox to create the fun and simple UI. I worked with another member of the team
            to design graphics in photoshop to illustrate each category.</p>
          </div>
        </div>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={Fuzzies} style={{width:'75%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Project Execution</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>Next, I worked on the backend by
            implementing the Twillio API so users can send a "gift" (either a joke, roast, flirt, etc.)
            to their friends from a Twillio number. The messages are randomly selected from a
            database of texts that a member of our team who has experience in comedic sketches came up with.</p>
          </div>
        </div>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={Twillio} style={{width:'85%', marginBottom:'2%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Project Completion</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>Even though it was my first
            time implementing the Twillio API, in React Native, I was able to apply their documentation
            smoothly to the mobile platform. Also, many of the design decisions were
            easy to adjust once the flexbox containers were set up and organized.
            Overall, this app was a pleasure to work on because it was our unique idea that
            allowed us to be imaginative.</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Gifter;
