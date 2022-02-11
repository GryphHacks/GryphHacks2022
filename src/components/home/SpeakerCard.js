import React from 'react';

const SpeakerCard = ({member}) => {
  return (
    <div style={speakerCardStyle}>
      <img style={speakerImageStyle} alt={member.name} src={member.image} />
      <div style={speakerInfoStyle}>
        <h4>{member.name}</h4>
        <h5 style={{fontSize:"15px"}}>{member.role}</h5>
        <br/>
        <p>{member.description}</p>
      </div>
    </div>
  );
}

const speakerCardStyle = {
  display: "flex",
  columnGap: "5%",
  alignItems: "center"
}

const speakerImageStyle = {
  borderRadius: "50%",
  height:"200px",
  width:"200px",
}

const speakerInfoStyle = {
  backgroundColor: "#8A8A8A",
  color: "white",
  paddingTop: "5%",
  paddingBottom: "5%",
  paddingLeft: "5%",
  paddingRight: "5%",
  width: "75%",
  borderRadius: "10px",
};

export default SpeakerCard;
