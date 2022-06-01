import GoldLogo from "../sponsors/GoldLogo"
import SilverLogo from "../sponsors/SilverLogo"
import BronzeLogo from "../sponsors/BronzeLogo"
import data from "../../data/sponsor.json"

import "./stylesheet/logo_showcase.css";

const LogoShowcase = () => {
    return (
        <div className="logo-background">
            <div className="logo-container">
                <GoldLogo goldSponsors= {data[1]}/>
                <SilverLogo silverSponsors= {data[2]}/>
                <BronzeLogo bronzeSponsors = { data[3] }/>
            </div>
            <hr className="yellow-bar" />
        </div>
    )
}

export default LogoShowcase;
