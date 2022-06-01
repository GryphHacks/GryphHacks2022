const GoldLogo = ({ goldSponsors }) => {

    return (
        <div className="tier">
            { goldSponsors.map( ({ gold_id, logo, imgStyle }) => (
                <img className="gold-logo tier-logo" style={ imgStyle } key={ gold_id } src={ logo }/>
            ))}
        </div>
    )
}

export default GoldLogo;
