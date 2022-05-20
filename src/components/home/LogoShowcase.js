import GoldLogo from "../sponsors/GoldLogo"
import SilverLogo from "../sponsors/SilverLogo"
import BronzeLogo from "../sponsors/BronzeLogo"
import data from "../../data/sponsor.json"

import "./stylesheet/logo_showcase.css";

const LogoShowcase = () => {
    return (
        <div className="logo-background">
            {/* <SilverLogo silverLogo = {data[2]}/>
            <GoldLogo goldLogo = {data[1]}/> */}
            <BronzeLogo bronzeSponsors = {data[3]}/>
        </div>
    )
}

export default LogoShowcase;
