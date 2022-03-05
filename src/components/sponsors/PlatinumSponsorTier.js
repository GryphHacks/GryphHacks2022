const PlatinumSponsorTier = ({props: {tier, about, cost, color, perks}}) => {
    var id = 0;
    
    var perksFirst = perks.slice(0, perks.length / 2);
    var perkSecond = perks.slice(-(perks.length / 2 ))

    return (
        <div className="sponsor-card shadow-below" style={{backgroundColor: color, flexDirection: "row"}}>
            <div className="sponsor-about platinum-about shadow-below">
                <h2>{tier}</h2>
                <hr className = "line-break" style={{background: color}}/>
                <br/>
                <h5 className="text-centered">{about}</h5>
            </div>
            <div className="sponsor-info-cost">
                <h3>${cost}+</h3>
                <div className="sponsor-info">
                    <ul className="list-flex">
                        {perksFirst.map(({item}) => (
                            <li key= {id++} className="info-list">{item}</li>
                        ))}
                    </ul>    
                </div>
                <div className="sponsor-info">
                    <ul className="list-flex">
                        {perkSecond.map(({item}) => (
                            <li key= {id++} className="info-list">{item}</li>
                        ))}
                    </ul>    
                </div>
            </div>
        </div>
    )
}


export default PlatinumSponsorTier
