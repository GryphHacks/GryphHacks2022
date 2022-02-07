const SponsorTier = ({props: {tier, about, cost, color,  perks}}) => {
    var id = 0;

    return (
        <div className="sponsor-card shadow-below" style={{backgroundColor: color}}>
            <div className="sponsor-about shadow-below">
                <h2>{tier}</h2>
                <hr className = "line-break" style={{background: color}}/>
                <br/>
                <h5 className="text-centered">{about}</h5>
            </div>
           <div className="sponsor-info">
               <h3>${cost}</h3>
               <ul>
                {perks.map(({item}) => (
                    <li key= {id++} className="info-list">{item}</li>
                ))}
               </ul>    
           </div>
        </div>
    )
}


export default SponsorTier
