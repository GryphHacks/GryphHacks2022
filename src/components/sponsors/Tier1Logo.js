const Tier1Logo = ({tier1Sponsor}) => {
    const tier1 = {
        display:"flex",
        // flexDirection:"column",
        alignItems:"center",
    }
    const img  = {
        display: "inline",
        maxWidth:"100px",
        maxHeight:"100px",
        width: "auto",
        height: "auto",
      }
    return (
        <div>
            <div style = {tier1}>
                {tier1Sponsor.map( ({id1,logo}) => (
                <img key = {id1} src = {logo} style = {img}/>
                ))}
            </div>
        </div>
    )
}

export default Tier1Logo
