import React from 'react'
import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';
import circuit from '../../assets/circuit.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./stylesheet/sponsor_carousel.css";

const Speakers = () => {
  return (
    <div style={{"position": "relative"}}>
      <img style={{...circuitImageStyle, ...{"left": "0", "top": "5%"}}} src={circuit} alt="circuit" />
      <hr style={speakerSeparatorStyle} />
      <div style={speakerContent}>
        <h1 style={{ "letter-spacing": "10px" }}>KEYNOTE SPEAKERS</h1>
        <Carousel
          className='speaker-carousel'
          showArrows ={true} 
          showThumbs = {false} 
          showStatus = {false} 
          infiniteLoop = {true} 
          interval ={10000} 
          autoPlay = {true}
          width = {1032}
          emulateTouch = {true}
          swipeable = {true}
          showIndicators={false}
        >
          {speakers.map((speaker) => (
            <SpeakerCard member={speaker} />
          ))}
        </Carousel>
      </div>
      <img style={{...circuitImageStyle, ...{"transform": "rotate(180deg)", "right": "0", "bottom": "-15%"}}} src={circuit} alt="circuit" />
    </div>
  );
}

//circuit image
const circuitImageStyle = {
  position: "absolute",
  height: "30%",
  width: "20%",
  zIndex: "-1",
};

// top separator
const speakerSeparatorStyle = {
  backgroundColor: "var(--gryphyellow)",
  opacity: "1",
  padding: "2%",
  width: "100%",
};

// all text and content within the Keynote Speakers section on Landing
const speakerContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5%",
  paddingBottom: "5%",
};

export default Speakers;
