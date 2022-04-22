import speakers from "../../data/speaker.json";
import SpeakerCard from './SpeakerCard';
import circuitSVG from '../../assets/Circuit-Primary.svg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./stylesheet/sponsor_carousel.css";

const Speakers = () => {
  return (
    <div style={{ position: "relative" ,textAlign:'center',overflow:'hidden'}}>
      <img
        style={{ ...imgStyle, ...{ left: "0", top: "5%" } }}
        src={circuitSVG}
        alt="circuit"
      />
      {/* TODO this separator is part of LogoShowcase background */}
      {/* <hr style={separatorStyle} /> */}
      <div style={contentStyle}>
        <h1 className='section-title'>KEYNOTE SPEAKERS</h1>
        <Carousel
          className="speaker-carousel"
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          interval={10000}
          autoPlay={true}
          emulateTouch={true}
          swipeable={true}
          showIndicators={true}
        >
          {speakers.map((speaker) => (
            <SpeakerCard member={speaker} />
          ))}
        </Carousel>
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
