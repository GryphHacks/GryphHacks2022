const Tier2Logo = ({tier2Sponsor}) => {
   const tier2 = {
        display:"grid",
        paddingLeft:"5%",
        alignItems:"center",
        gridTemplateColumns:"auto auto auto"
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
            <div style = {tier2}>
                {tier2Sponsor.map( ({logo}) => (
                <img src = {logo} style = {img}/>
                 ))}
            </div>
        </div>
    )
}

export default Tier2Logo
