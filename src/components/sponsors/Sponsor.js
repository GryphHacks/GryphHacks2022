import Pdf from '../test.pdf';
import { Link } from "react-router-dom";
import SponsorTier from './SponsorTier';
import PlatinumSponsorTier from './PlatinumSponsorTier';
import "./stylesheet/sponsor_page.css"

const sponsorTiers = [
    {
        tier:"BRONZE",
        about:"The bronze tier is the basic package for organizations to participate in GryphHacks offering:",
        cost:1000.00,
        color:"#C39E82",
        perks: [
            {
                item: "Dedicated discord channel"
            },
            {
                item: "Custom hackathon category"
            },
            {
                item: "Distribute swag"
            },
            {
                item: "Social media mentions"
            },
            {
                item: "Send 1 recruiter/company representative"
            },
            {
                item: "Distribute recruiting materials/promo"
            },
            {
                item: "Small integrated sponsor logo on website"
            },
        ]
    },
    {
        tier:"SILVER",
        about:"The silver tier offers all the advantages of the bronze tier in addition to:",
        cost:2000.00,
        color:"#A4A4A4",
        perks: [
            {
                item: "A 30 minute workshop"
            },
            {
                item: "1 judge on the judging panel"
            },
            {
                item: "Access to hackies mailing list"
            },
            {
                item: "Medium integrated sponsor logo on website"
            }
        ]
    },
    {
        tier:"GOLD",
        about:"The gold tier offers all the advantages of the silver and bronze tier in addition to:",
        cost:4000.00,
        color:"#CAB377",
        perks: [
            {
                item: "1 minute keynote or opening/closing remarks"
            },
            {
                item: "An hour long workshop"
            },
            {
                item: "2 judges on the judging panel"
            },
            {
                item: "Branded sponsorship of the livestream"
            },
            {
                item: "Social media takeover"
            },
            {
                item: "Company showcase on website"
            },
            {
                item: "Send 2 recruiters/company representatives"
            },
            {
                item: "Large integrated sponsor logo on website"
            },
            {
                item: "Receive hackies resumes"
            },
        ]
    }
];


const platinum = {
    tier:"PLATINUM",
    about:"The platinum tier is available for any organization who contributes over $8000 and contains all the benefits of the gold, silver and bronze tiers with the addition of:",
    cost:8000.00,
    color:"#5E97A9",
    perks: [
        {
            item: "2 minute keynote or opening/closing remarks"
        },
        {
            item: "3 judges on the judging panel"
        },
        {
            item: "Integrated merch branding"
        },
        {
            item: "Personalized \‘Our #PresentingPartner\’ company feature on website"
        },
        {
            item: "Send 3 recruiters/company representatives"
        },
        {
            item: "Large and central integrated sponsor logo on website"
        },
        {
            item: "Host live interviews"
        },
    ]
};


const Sponsor = () => {
    return (
        <div className='sponsor-box'>
            <div className='sponsor-box-centered'>
                <br/>
                <h1>Sponsor Tiers</h1>
                <PlatinumSponsorTier props={platinum}/>
                <br/>
                <div className='normal-sponsor'>
                    {sponsorTiers.map(sponsorTier => (<SponsorTier key={sponsorTier.tier}  props = {sponsorTier} />))}
                </div>
                <br/>
                <Link to = {Pdf} target = "_blank">Pamphlet</Link>
                <p>Learn more here</p>
            </div>
        </div>
    )
}
export default Sponsor
