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
        {leftData.map( ({question,answer}) => (
            <Question question={question} answer={answer}/>
          ))}
        </div>
        <div>
        {rightData.map( ({question,answer}) => (
            <Question question={question} answer={answer}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionList
