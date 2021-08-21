const Tier1Logo = ({tier1Sponsor}) => {
    const tier1 = {
        display:"grid",
        alignItems:"center",
        gridTemplateColumns:"auto auto auto auto auto",
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
                {tier1Sponsor.map( ({logo}) => (
                <img src = {logo} style = {img}/>
                ))}
            </div>
        </div>
    )
}

export default Tier1Logo
