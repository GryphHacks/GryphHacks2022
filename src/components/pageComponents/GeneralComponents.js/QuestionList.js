import Question from "./Question"
const QuestionList = ({data}) => {
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

const columns ={
    display: "grid",
    gridTemplateColumns: "auto auto"    
   
  }
  
export default QuestionList

