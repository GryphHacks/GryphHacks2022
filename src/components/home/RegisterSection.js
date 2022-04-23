import "./stylesheet/register_landing.css"
import { Link, useHistory } from "react-router-dom";

const RegisterSection = () => {

    const history = useHistory();

    return (
        <>
            <div className="register">
                <h1 className='register-title'>Applications are now open!</h1>
                <div className="register-buttons">
                    <button id="hackie-signup" onClick={ (e) => {
                        e.preventDefault();
                        window.open("https://7zz0jrazbwj.typeform.com/to/v9Msd4Sj", "_blank");
                    }}>Hackie</button>
                    <button id="mentor-signup" onClick = { (e) => {
                        e.preventDefault();
                        window.open("https://7zz0jrazbwj.typeform.com/to/Ebv9KUyq", "_blank");
                    }}>Mentor</button>
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
