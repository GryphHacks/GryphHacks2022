import { useState } from "react";
import "./stylesheet/Question.css"

const Question = ({ question, answer }) => {


  const [isClicked, setClicked] = useState(false);
  return (
    <div>
   
      <div className = "divQuestion"onClick={() => setClicked(!isClicked)}>
        <h6 className = "Question">  {question}  {isClicked ? <p className = "up"></p>: <p className = "down"></p>}</h6>
      </div>

      <div 
        className={`answer-collapse ${isClicked ? 'show' : ''}`}>
        {answer}
      </div>
      <br/>
      
    </div>
  );
};

export default Question;
