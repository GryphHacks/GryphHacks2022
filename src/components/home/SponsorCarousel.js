import Showcase from "./Showcase"
import { Carousel } from "react-responsive-carousel"
import data from "../../data/sponsor.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./stylesheet/sponsor_carousel.css"
const SponsorCarousel = () => {

    return (
      <div>
            <h1 className = "headingCSS">SPONSOR SHOWCASE</h1>
            <div className = "carouselContainer">
              <Carousel 
                showArrows ={true} 
                showThumbs = {false} 
                showStatus = {false} 
                infiniteLoop = {true} 
                interval ={10000} 
                autoPlay = {true}
                width = {1032}
                emulateTouch = {true}
                swipeable = {true}
                showIndicators={false}
              >

              {data[2].map(({id2,name,sponsorImage,link,sponsorMessage})=>(
    
                  <Showcase key = {id2} name = {name} image = {sponsorImage} link = {link} message = {sponsorMessage}/>
                
                ))}
              {data[3].map(({id3,name,sponsorImage,link,sponsorMessage}) =>(
        
                  <Showcase key = {id3} name = {name} image = {sponsorImage} link = {link} message = {sponsorMessage}/>
      
              ))}
              </Carousel>
            </div>


              </div>
        
    )
}

export default SponsorCarousel
