import './App.scss';
import IntroVideo from './components/IntroVideo.jsx'
import Section from './components/Section.jsx'
import data from './data/data.json'
import './styles/colors.scss';
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import Misc from './components/Misc.jsx'

import freshtopicimg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";
import { useState, useEffect } from 'react';

const yellow = "#fff100",
pink = "#ed1e79",
white = "#fff",
// red= '#d20120',
brown = "#6d3d0f";

function App() {
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  
  } = data

  const [loading, setlaoding] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setlaoding(false)
    }, 3000);

  }, [])
  
  return (
    <div className="App">
      {loading&&<Loader/>}
      <IntroVideo/>
      {/* freshtopic */}
      <Section 
        headingtext={freshTopic.heading}
        btntext={freshTopic.btn}
        text={freshTopic.text}
        headingtextcolor= {yellow}
        textcolor={yellow}
        btntextcolor={pink}
        btnbgcolor={yellow}
        bgcolor={pink}
        imgsource={freshtopicimg}
      />
      {/*Freshtopic2  */}
      <Section 
        headingtext={freshTopic2.heading}
        btntext={freshTopic2.btn}
        text={freshTopic2.text}
        headingtextcolor= {yellow}
        textcolor={yellow}
        btntextcolor={pink}
        btnbgcolor={yellow}
        bgcolor={pink}
        imgsource={freshTopic2Img}
        imgsize= "40%"
      />
      {/* Ted Talks */}
      <Section 
        headingtext={tedTalks.heading}
        btntext={tedTalks.btn}
        text={tedTalks.text}
        headingtextcolor= {pink}
        textcolor={pink}
        btntextcolor={yellow}
        btnbgcolor={pink}
        bgcolor={yellow}
        imgsource={tedTalksImg}
        imgsize= "50%"

      />
      {/* Franchise */}
      <Section 
        headingtext={franchise.heading}
        btntext={franchise.btn}
        text={franchise.text}
        headingtextcolor= {pink}
        textcolor={brown} 
        btntextcolor={yellow}
        btnbgcolor={brown}
        bgcolor={white}
        imgsource={franchiseImg}
      />
      {/* Map */}
      <Section 
        headingtext={map.heading}
        btntext={map.btn}
        text={map.text}
        headingtextcolor= {yellow}
        textcolor={yellow}
        bgcolor={pink}
        imgsource={mapImg}
        hasbutton= {false} 
        imgsize= "80%"


      />
      {/* courses */}
      <Section 
        headingtext={courses.heading}
        btntext={courses.btn}
        text={courses.text}
        headingtextcolor= {pink}
        textcolor={pink}
        btntextcolor={yellow}
        btnbgcolor={pink}
        bgcolor={yellow}
        imgsource={coursesImg}
        imgsize= "35%"

      />
      {/* album */}
      <Section 
        headingtext={album.heading}
        btntext={album.btn}
        text={album.text}
        headingtextcolor= {pink}
        textcolor={brown}
        btntextcolor={yellow}
        btnbgcolor={brown}
        bgcolor={white}
        imgsource={albumImg}
      />
      {/* barat */}
      <Section 
        headingtext={barat.heading}
        btntext={barat.btn}
        text={barat.text}
        headingtextcolor= {yellow}
        textcolor={yellow}
        btntextcolor={pink}
        btnbgcolor={yellow}
        bgcolor={pink}
        imgsource={baratImg}
        imgsize= "40%"

      />
      {/* chaiwala */}
      <Section 
        headingtext={chaiwala.heading}
        btntext={chaiwala.btn}
        text={chaiwala.text}
        headingtextcolor= {pink}
        textcolor={brown}
        btntextcolor={yellow}
        btnbgcolor={brown}
        bgcolor={white}
        imgsource={chaiWalaImg}
        
      />

      <Footer/>
      <Misc/>
    </div>
  );
}

export default App;