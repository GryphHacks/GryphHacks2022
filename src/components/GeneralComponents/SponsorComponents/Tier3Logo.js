const Tier3Logo = ({tier3Sponsor}) => {
    const tier3 = {
        display:"inline-grid",
        alignItems:"center",
        gridTemplateColumns:"auto auto",
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
            <div style = {tier3}>
                {tier3Sponsor.map( ({logo}) => (
                 <img src = {logo} style = {img}/>
                ))}
            </div>
        </div>
    )
}

export default Tier3Logo
