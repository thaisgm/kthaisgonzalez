import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem,
  MDBView, MDBMask, MDBContainer } from "mdbreact";
import BBLogin from './BBLogin.png';
import BBHome from './BBHome.png';
import BBProfile from './BBProfile.png';
import BBSearch from './BBSearch.png';
import BBSearchResult from './BBSearchResult.png';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  duration: 50000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const BingeBuddy = () => {
  return (
    <div className="slide-container">
    <h2 style={{fontSize:"5vh", marginTop:'0.75%'}}>Gifter</h2>
    <p className="text-center w-responsive" style={{fontSize:"2.25vh", margin:'0.5%', marginLeft:'10%', marginRight:'10%'}}>
    A mobile application designed to allow movie and TV show buffs to share reviews and all time lists with their friends.
    </p>
      <Fade {...fadeProperties} style={{marginTop:'-7%'}}>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={BBLogin} style={{width:'130%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Project Login</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>Binge Buddy is an mobile app I made in a group with three other developers.
            We used Java in Android Studio in order to develop the App. Our idea was to socialize the movie and review process. This would
            allow people to hear recommended shows from their friends, and hopefully get out of their comfort zone and watch
            shows besides The Office. The user account creation process was developed with Cloud Firestore.</p>
          </div>
        </div>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={BBProfile} style={{width:'90%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Personal Profile</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>Once you create an account and login, users get to develop a profile. Their
            profile includes a profile picture, top ten lists for their all time favorite movies and shows, and all the reviews they've made.
            Also, they can add followers in order to see more reviews.</p>
          </div>
        </div>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={BBSearch} style={{width:'120%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Search page</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>Next, I worked on the search functionality. This page allowed users to type in a title, and using a movie database API, search through various titles to find the mathcing one.
            From here, users can click titles for more information and to leave a review. The search function is built in to the movie database API, and I displayed the results in order of relevancy.</p>
          </div>
        </div>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
            <img src={BBSearchResult} style={{width:'100%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Search page</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>The movie poster, title, and description is pulled from the API and displayed to the user. I had to use string parsing in order to collect the right information since the API object returned wasn't consistent. From here, they can choose to leave a review on the movie and share it with friends! </p>
          </div>
        </div>
        <div className="each-fade" style={{boxShadow: "0 0 5px 2px #fff", backgroundColor:"rgba(46, 65, 116, 0.8)", padding: '3%'}}>
          <div>
          <img src={BBHome} style={{width:'130%'}} />
          </div>
          <div style={{marginTop:'10%', color:'white'}}>
            <h2 style={{fontSize:"4vh"}}>Project Completion</h2>
            <p style={{marginLeft:'15%', marginRight:'15%'}}>Even though it was our first
            time developing within Android Studio, our efforts went smoothly. Although we didn't achieve all we wanted to in the brief amount of time we worked on the app,
            we were proud to have a completed user experience flow to demonstrate. Personally, I was
            happy that I was able to work with the movie database API and display the proper information
            because it was a difficult API to work with.</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BingeBuddy;
