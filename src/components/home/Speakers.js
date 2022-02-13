import React from 'react'
import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';
import circuit from '../../assets/circuit.png'

const Speakers = () => {
  return (
    <div style={{"position": "relative"}}>
      <img style={{...circuitImageStyle, ...{"left": "0", "top": "5%"}}} src={circuit} alt="circuit" />;
      <hr style={speakerSeparatorStyle} />
      <div style={speakerContent}>
        <h1 style={{ "letter-spacing": "10px" }}>KEYNOTE SPEAKERS</h1>
        <div style={speakerStyle}>
          <SpeakerCard member={speakers[0]} />
        </div>
      </div>
      <img style={{...circuitImageStyle, ...{"transform": "rotate(180deg)", "right": "0", "bottom": "-15%"}}} src={circuit} alt="circuit" />
    </div>
  );
}

//circuit image
const circuitImageStyle = {
  position: "absolute",
  height: "25%",
  width: "25%",
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

// div around SpeakerCard component
const speakerStyle = {
  marginTop: "3%",
  padding: "5% 5%",
  border: "2px solid rgba(221,17,51,.73)",
  width: "70%"
};

export default Speakers;
