import Question from "./Question"

const QuestionList = ({leftData,rightData}) => {
  const columns = {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  };

  return (
    <div>
      <div style = {columns}>
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
