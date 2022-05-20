import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';
import circuitSVG from '../../assets/Circuit-Primary.svg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./stylesheet/sponsor_carousel.css";
import { useState } from "react";

const Speakers = () => {
  const [speaker, setSpeaker] = useState(speakers[0])

  return (
    <div style={{ position: "relative", textAlign:'center', overflow:'hidden'}}>
      <img
        style={{ ...imgStyle, ...{ left: "0", top: "5%" } }}
        src={circuitSVG}
        alt="circuit"
      />
      {/* TODO this separator is part of LogoShowcase background */}
      {/* <hr style={separatorStyle} /> */}
      <div style={contentStyle}>
        <h1 className='section-title'>KEYNOTE SPEAKERS</h1>
        <div style={speakerSection}>
          <img style={photoStyle} alt={speaker.name} src={speaker.image} />

          <Carousel
            className="speaker-carousel"
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            interval={10000}
            width = {800}
            autoPlay={false}
            emulateTouch={true}
            swipeable={true}
            showIndicators={true}
            // onChange={setSpeaker(speaker)}
          >
            {speakers.map((speaker) => {
              // the line below doesn't work
              // setSpeaker(speaker)
              return (<SpeakerCard member={speaker} />)
            })}
          </Carousel>
        </div>
      </div>
      <img
        style={{
          ...imgStyle,
          ...{ transform: "rotate(180deg)", right: "0", bottom: "-15%" },
        }}
        src={circuitSVG}
        alt="circuit"
      />
    </div>
  );
}

// main Speakers component content - Speaker Card (photo and info section)
const speakerSection = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}


//circuit image
const imgStyle = {
  position: "absolute",
  // 300 and 600
  // 25% and 50%
  height: "300px",
  width: "800px",
  zIndex: "-1",
  objectFit: "cover",
};

// image in Speaker Card
const photoStyle = {
  borderRadius: "50%",
  border: "10px solid rgba(221,17,51,.73)",
  height: "200px",
  width: "200px",
  padding: "5px"
};

// top separator
const separatorStyle = {
  backgroundColor: "var(--gryphyellow)",
  opacity: "1",
  padding: "2%",
  width: "100%",
};

// all text and content within the Keynote Speakers section on Landing
const contentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5%",
  paddingBottom: "5%",
  fontSize: "large"
};

export default Speakers;
