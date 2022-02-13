import React from 'react';

const SpeakerCard = ({member}) => {
  return (
    <div style={cardStyle}>
      <img style={photoStyle} alt={member.name} src={member.image} />
      <div style={infoCardStyle}>
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
const cardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "5%",
  padding: "5% 5%",
  marginBottom: "20px"
}

// image in Speaker Card
const photoStyle = {
  borderRadius: "50%",
  border: "10px solid rgba(221,17,51,.73)",
  height: "200px",
  width: "200px",
  padding: "5px"
};

// info section in Speaker Card
const infoCardStyle = {
  textAlign: "left",
  position: "relative",
  backgroundColor: "#8A8A8A",
  color: "white",
  padding: "5%",
  width: "60%",
  borderRadius: "10px",
  boxShadow: "-3px 3px 3px rgb(122,122,122)",
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
  boxShadow: "-5px 5px 10px rgb(180, 186, 194)",
};

export default SpeakerCard;
