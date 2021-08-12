import Question from "./Question"

const QuestionList = ({data}) => {
  const columns = {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  };

  return (
    <div>
      <div style = {columns}>
        {data.map( ({question,answer}) => (
          <Question question={question} answer={answer}/>
        ))}
      </div>  
    </div>
  )
}

export default QuestionList
