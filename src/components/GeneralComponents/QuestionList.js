import Question from "./Question"
const QuestionList = ({leftData,rightData}) => {
    return (
        <div >
             <div style = {columns}>
                 <div>
                    {leftData.map( ({question,answer}) => (
                    <Question  question={question} answer={answer}/>
                    ))}
                 </div>
                 <div>
                    {rightData.map( ({question,answer}) => (
                    <Question  question={question} answer={answer}/>
                    ))}
                 </div>
            </div>  
            
        </div>
    )
}
const columns ={
    display: "grid",
    gridTemplateColumns: "50% 50% ",
  }
  
export default QuestionList

