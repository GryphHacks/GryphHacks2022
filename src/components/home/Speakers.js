import React from 'react'
import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';
// import FooterCircuit from '../../assets/FooterCircuit.svg'

const Speakers = () => {
  return (
    <div style={speakerSectionStyle}>
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

const speakerSectionStyle = {
  // backgroundImage: "url('https://www.google.com/search?q=image&rlz=1C1CHBF_enCA940CA940&sxsrf=APq-WBveyAa6W5AxY50iipZ-lzuCj4oYig:1644555349569&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253B0DzWhtJoQ1KWgM%252CcIQ7wXCEtJiOWM%252C_%253B8AC2p98LQ_DbXM%252CoKOKhliCCm15yM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BqHRJdD_fikxVkM%252CF2R8PY0eFUPyBM%252C_%253BkwgHAQqTiLQXLM%252CR0KnAtfyBDsyiM%252C_&usg=AI4_-kT0u8bMWi21vk4RnhfZGBXkw2v8Pg&sa=X&ved=2ahUKEwiGhLKL7vb1AhVMkYkEHXRODmMQ9QF6BAgDEAE#imgrc=gxFxsvFBmxeZ9M')",
  backgroundColor: "SeaShell",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
};

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
