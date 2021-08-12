import QuestionList from "../GeneralComponents/QuestionList";
import faq from '../../data/faq.json';
const FAQ = () => {
    return (
        <div>
            <h1>Frequently Asked Questions!</h1>
            <br></br>
            <QuestionList leftData = {faq.left} rightData = {faq.right}/>
        </div>
    )
}

export default FAQ;