import React from 'react';

const SpeakerCard = ({member}) => {
  return (
    <div>
      <img
        width="200"
        height="200"
        alt={member.name}
        src={member.image}
      />
      <h4 style={speakerCardStyle}>{member.name}</h4>
      <p>{member.role}</p>
    </div>
  )
}

const speakerCardStyle = {
  paddingTop: "5%",
}

export default SpeakerCard;
