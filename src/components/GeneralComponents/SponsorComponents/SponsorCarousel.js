import Showcase from "./Showcase"
import { Carousel } from "react-responsive-carousel"
import data from "../../../data/sponsor.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./SponsorCarousel.css"
const SponsorCarousel = () => {
    return (
        <div>
            <Carousel 
            showArrows ={true} 
            showThumbs = {false} 
            showStatus = {false} 
            infiniteLoop = {true} 
            interval ={10000} 
            autoPlay = {true}
       
            >

            {data[2].map(({id2,sponsorImage,link,sponsorMessage})=>(
                <Showcase key = {id2} image = {sponsorImage} link = {link} message = {sponsorMessage}/>
            ))}

            {data[3].map(({id3,sponsorImage,link,sponsorMessage}) =>(
                 <Showcase key = {id3} image = {sponsorImage} link = {link} message = {sponsorMessage}/>
            ))}
            </Carousel>
        </div>
    )
}

export default SponsorCarousel
