import React from 'react'
import speakersList from "../../../data/speaker.json"
import GuestCard from './GuestCard'

const Speakers = () => {
    return (
        <div  style = {columns}>
            {
                speakersList.map((speaker) => (
                    <GuestCard key={"speaker_" + speaker.id} member={speaker} />
                ))
            }
        </div>
    )
}


const columns ={
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 20% 20%",
  }

export default Speakers;
