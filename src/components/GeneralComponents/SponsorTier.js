const SponsorTier = ({props: {tier, about, cost,  perks}}) => {
    var id = 0;

    return (
        <div>
            <div>
                <h2>{tier}</h2>
                <br/>
                <h4>{about}</h4>
            </div>
           <div>
               <h3>${cost}</h3>
               <ul>
                {perks.map(({item}) => (
                    <li key= {id++}>{item}</li>
                ))}
               </ul>    
           </div>
        </div>
    )
}


export default SponsorTier
