import Question from "./Question"
import './Question.css'
const QuestionList = ({leftData,rightData}) => {
  
  return (
    <div>
      <div className = 'columns'>
        <div>
        {leftData.map( ({idL,question,answer}) => (
            <Question key = {idL} question={question} answer={answer}/>
          ))}
        </div>
        <div>
        {rightData.map( ({idR,question,answer}) => (
            <Question key = {idR} question={question} answer={answer}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionList
