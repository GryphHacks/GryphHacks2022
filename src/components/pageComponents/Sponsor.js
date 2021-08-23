import Pdf from '../test.pdf';
import { Link } from "react-router-dom";

const Sponsor = () => {
    return (
        <div>
            <h1>Sponsor</h1>
            <br/>
            <Link to = {Pdf} target = "_blank">Pamphlet</Link>
            <p>Learn more here</p>
        </div>
    )
}

export default Sponsor
