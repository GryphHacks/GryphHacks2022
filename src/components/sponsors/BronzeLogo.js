const BronzeLogo = ({ bronzeSponsors }) => {
    
    const bronze = {
        display:"flex",
        // flexDirection:"column",
        alignItems:"center",
    }

    const logo = {
        display: "inline",
        maxWidth:"100px",
        maxHeight:"100px",
        width: "auto",
        height: "auto",
    }

    return (
        <div>
            <div style={ bronze }>
                {bronzeSponsors.map( ({ bronze_id, img }) => (
                    <img style={logo} key={ bronze_id } src={ img }/>
                ))}
            </div>
        </div>
    )
}

export default BronzeLogo;
