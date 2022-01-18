import React from 'react'
import judgesList from "../../data/judges.json"
import GuestCard from './GuestCard'

const Judges = () => {
    return (
        <div  style = {columns}>
            {judgesList.map((judge) => (
                <GuestCard key={"judge_" + judge.id} member={judge} />
            ))
            }
        </div>
    )
}

const columns ={
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 20% 20%",
    backgroundColor: 'grey'
  }

export default Judges;
