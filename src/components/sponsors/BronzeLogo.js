import "./stylesheet/logos.css"

const BronzeLogo = ({ bronzeSponsors }) => {

    return (
        <div className="tier">
            {bronzeSponsors.map( ({ bronze_id, logo, imgStyle }) => (

                <img className="tier-logo bronze-logo" style={ imgStyle } key={ bronze_id } src={ logo }/>
            ))}
        </div>
    )
}

export default BronzeLogo;
