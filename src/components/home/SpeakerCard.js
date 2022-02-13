import React from 'react';

const SpeakerCard = ({member}) => {
  return (
    <div style={speakerCardStyle}>
      <img style={speakerImageStyle} alt={member.name} src={member.image} />
      <div style={speakerInfoStyle}>
        <div style={layerStyle} />
        <h4>{member.name}</h4>
        <h5 style={{fontSize: "15px"}}>{member.role}</h5>
        <br />
        <p>{member.description}</p>
      </div>
    </div>
  );
}

// main Speakers component content - Speaker Card (photo and info section)
const speakerCardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "5%",
  // marginTop: "3%",
  padding: "5% 5%",
  // border: "2px solid rgba(221,17,51,.73)",
}

// image in Speaker Card
const speakerImageStyle = {
  borderRadius: "50%",
  border: "10px solid rgba(221,17,51,.73)",
  height: "200px",
  width: "200px",
  padding: "5px"
};

// info section in Speaker Card
const speakerInfoStyle = {
  textAlign: "left",
  position: "relative",
  backgroundColor: "#8A8A8A",
  color: "white",
  padding: "5%",
  width: "60%",
  borderRadius: "10px",
};

// bottom layer of info section of Speaker Card
const layerStyle = {
  position: "absolute",
  zIndex: "-1", // z-index applies only to absolutely positioned elements
  height: "100%",
  width: "100%",
  top: "15px",
  right: "15px",
  backgroundColor: "rgba(221,17,51,.73)",
  borderRadius: "10px",
};

export default SpeakerCard;
