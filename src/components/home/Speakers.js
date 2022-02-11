import React from 'react'
import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';
// import FooterCircuit from '../../assets/FooterCircuit.svg'

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
  backgroundColor: "var(--gryphyellow)",
  opacity: "1",
  padding: "2%",
  width: "100%",
};

const speakerContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5%",
  paddingBottom: "5%",
};

const speakerStyle = {
  padding: "5% 10%",
  border: "2px solid rgba(221,17,51,.73)",
  align: "center",
  width: "80%"
};

export default Speakers;
