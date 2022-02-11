import React from 'react';

// have image on left
// have name, description, main info on right 
// all in one component
const SpeakerCard = ({member}) => {
  return (
    <div style={speakerCardStyle}>
      <img style={speakerImageStyle} alt={member.name} src={member.image} />
      <div style={speakerInfoStyle}>
        <h4>{member.name}</h4>
        <h5 style={speakerJobStyle}>{member.role}</h5>
        <br/>
        <p>{member.description}</p>
      </div>
    </div>
  );
}


const speakerCardStyle = {
  display: "flex",
  flexDirection: "row",
  alignContent: "center", //idk why this isn't working
  columnGap: "5%",
  width: "75%"
}

const speakerImageStyle = {
  borderRadius: "50%",
  height:"200px",
  width:"200px",

}

const speakerJobStyle = {
  fontSize: "15px"
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
