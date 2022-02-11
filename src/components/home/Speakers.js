import React from 'react'
import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';

const Speakers = () => {
  return (
    <div>
      <hr style={speakerSeparatorStyle} />
      <div style={speakerContent}>
        <h1>KEYNOTE SPEAKERS</h1>
        <div style={speakerStyle}>
          <SpeakerCard member={speakers[0]} />
        </div>
      </div>
    </div>
  );
}

const speakerSeparatorStyle = {
  backgroundColor: "#FFC14A",
  opacity: "1",
  padding: "2%",
  width: "100%",
}

const speakerContent = {
  paddingTop:"5%",
  paddingBottom:"10%",
}

const speakerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  paddingTop: "5%",
  paddingLeft: "10%",
  paddingRight: "10%",
};

export default Speakers;
