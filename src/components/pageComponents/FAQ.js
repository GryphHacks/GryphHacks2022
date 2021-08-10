import Question from "./GeneralComponents.js/Question";
import QuestionList from "./GeneralComponents.js/QuestionList";
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
        {
            question:"Where do I sign up for GryphHacks",
            answer:"Website"
        },


    ]
    return (
        <div>
            <h1>Frequently Asked Questions!</h1>
            <br></br>
            <QuestionList data = {faq}/>
        </div>
    )
}

export default FAQ;