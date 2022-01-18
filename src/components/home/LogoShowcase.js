import Tier1Logo from "../sponsors/Tier1Logo"
import Tier2Logo from "../sponsors/Tier2Logo"
import Tier3Logo from "../sponsors/Tier3Logo"
import data from "../../data/sponsor.json"
const LogoShowcase = () => {
    return (
        <div>
            <Tier3Logo tier3Sponsor = {data[3]}/>
            <Tier2Logo tier2Sponsor = {data[2]}/>
            <Tier1Logo tier1Sponsor = {data[1]}/>
        </div>
    )
}

export default LogoShowcase
