import "./stylesheet/logos.css"

const SilverLogo = ({ silverSponsors }) => {

    return (
        <div className="tier">
            {silverSponsors.map( ({ silver_id, logo, imgStyle }) => (
                <img className="silver-logo tier-logo" style={ imgStyle } key={ silver_id } src={ logo }/>
            ))}
        </div>
    )
}

export default SilverLogo;
