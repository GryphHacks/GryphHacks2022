import React from 'react'
import './stylesheet/speakers.css'
import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';

const Speakers = () => {
  return (
    <div>
      <hr className="speakerSeparator" />
      <div className="speakerContent">
        <h1>KEYNOTE SPEAKERS</h1>
        <div style={speakerStyle}>
          <SpeakerCard member={speakers[0]} />
        </div>
      </div>
    </div>
  );
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
