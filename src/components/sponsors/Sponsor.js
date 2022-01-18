import Pdf from '../test.pdf';
import { Link } from "react-router-dom";
import SponsorTier from './SponsorTier';


const sponsorTiers = [
    {
        tier:"bronze",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        cost:500.00,
        perks: [
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            }
        ]
    },
    {
        tier:"Silver",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        cost:1000.00,
        perks: [
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            }
        ]
    },
    {
        tier:"Gold",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        cost:5000.00,
        perks: [
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            },
            {
                item: "Lorem ipsum dolor sit amet"
            }
        ]
    }
];




const Sponsor = () => {
    return (
        <div>
            <h1>Sponsor</h1>
            <div style = {columns}>
                {sponsorTiers.map(sponsorTier => (<SponsorTier key={sponsorTier.tier}  props = {sponsorTier} />))}
            </div>
            <br/>
            <Link to = {Pdf} target = "_blank">Pamphlet</Link>
            <p>Learn more here</p>
        </div>
    )
}

const columns ={
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
  }



export default Sponsor
