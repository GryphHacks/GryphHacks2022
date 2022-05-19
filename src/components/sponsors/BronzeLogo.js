const BronzeLogo = ({ bronzeSponsors }) => {
    
    const bronze = {
        display:"inline-grid",
        alignItems:"center",
        gridTemplateColumns:"auto auto",
    }

    return (
        <div>
            <div style = {bronze}>
                {bronzeSponsors.map( ({ bronze_id, logo }) => (
                    <img  key={ bronze_id } src={ logo }/>
                ))}
            </div>
        </div>
    )
}

export default BronzeLogo;
