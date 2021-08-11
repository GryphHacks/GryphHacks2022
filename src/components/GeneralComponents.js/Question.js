import { useState } from "react"
import {FaChevronDown,FaChevronUp} from "react-icons/fa"
const Question = ({question,answer}) => {
    const [isClicked,setClicked] = useState(false)
    return (
        <div>
                <div onClick = {()=>setClicked(!isClicked)}>
                    <h6> {isClicked ? <FaChevronUp/>:<FaChevronDown/>} {question} </h6>
                </div>
                {isClicked && <div>{answer}</div>}
         
                <br></br>
        </div>
    )
}

export default Question
