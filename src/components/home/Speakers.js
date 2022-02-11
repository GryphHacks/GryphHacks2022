import React from 'react'
import './stylesheet/speakers.css'
import speakersList from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';

const Speakers = () => {
  return (
    <div>
      <hr className="speakerSeparator" />
      <div className="speakerContent">
        <h1>KEYNOTE SPEAKERS</h1>
        <div style={speakerStyle}>
          {speakersList.map((speaker) => (
            <SpeakerCard key={"speaker_" + speaker.id} member={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
}

const speakerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingTop: "5%",
  paddingLeft: "10%",
  paddingRight: "10%",
};

export default Speakers;
