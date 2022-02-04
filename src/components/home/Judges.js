import React from 'react'
import './stylesheet/judges.css';
import judgesList from "../../data/judges.json"
import GuestCard from './GuestCard'
// import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Judges = () => {
    return (
        <div id="judgesSection">
            <h1>OUR JUDGES</h1>
            <div id="layout">
                {judgesList.map((judge) => (
                    <GuestCard key={"judge_" + judge.id} member={judge} />
                ))
                }
            </div>
        </div>
    )
}


export default Judges;
