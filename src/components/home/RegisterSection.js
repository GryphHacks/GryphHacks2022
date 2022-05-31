import "./stylesheet/register_landing.css"
import { Link, useHistory } from "react-router-dom";

const RegisterSection = () => {

    const history = useHistory();

    return (
        <>
            <div className="register">
                {/* <h1 className='register-title'>Applications are now closed.</h1> */}
                {/* <div className="register-buttons">
                    <button id="primary-button" onClick={ (e) => {
                        e.preventDefault();
                        window.open("https://7zz0jrazbwj.typeform.com/to/v9Msd4Sj", "_blank");
                    }}>Hackie</button>
                    <button id="secondary-button" onClick = { (e) => {
                        e.preventDefault();
                        window.open("https://7zz0jrazbwj.typeform.com/to/Ebv9KUyq", "_blank");
                    }}>Mentor</button>
                </div> */}
                <div className="submissions-buttons">
                    <button id="primary-button" onClick={ (e) => {
                        e.preventDefault();
                        window.open("https://gryphhacks-2022.devpost.com/project-gallery", "_blank");
                    }}>Check out our 2022 submissions!</button>
                    <br></br>
                    <button id="secondary-button" onClick = { (e) => {
                        e.preventDefault();
                        window.open("https://www.youtube.com/playlist?list=PLS8Z-7tuTIuXisCWYMVe5kIUZw0ciM-Kj", "_blank");
                    }}>Watch our 2022 workshops and closing ceremony</button>
                </div>
            </div>
            <div className='sponsor-link-div'>
                <h6>Interested in becoming a Sponsor?&nbsp;
                    <Link to ='/sponsor' className="link">Learn more</Link> 
                </h6>
            </div>
        </>
    )
}

export default RegisterSection;
