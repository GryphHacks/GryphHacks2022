import Question from "./Question";
const FAQ = () => {
    const faq = [
        {
            question:"What is GryphHacks",
            answer:"Hackathon"
        },
        {
            question:"Where is GryphHacks Located",
            answer:"Guelph,Ontario"
        },
        {
            question:"Where do I sign up for GryphHacks",
            answer:"Website"
        },

    ]
    return (
        <div>
            <h1>Frequently Asked Questions!</h1>
            <br></br>
    
            {faq.map( ({question,answer}) => (
          <Question question={question} answer={answer} />
        ))}
        </div>
    )
}

export default FAQ;