import './stylesheet/judges.css';
import judgesList from "../../data/judges.json"
import GuestCard from './GuestCard'

const Judges = () => {
    return (
        <div id="judgesSection">
            <h1 className='section-title'>OUR JUDGES</h1>
            <h3>Coming Soon...</h3>
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
