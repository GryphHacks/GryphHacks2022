import QuestionList from "../GeneralComponents/QuestionList";
import faq from "../../data/faq.json"
const FAQ = () => {

const CSS = {
  color: "#000000",
  letterSpacing:"10px",
  textAlign:"Center",

}
  return (
    <div>
      <h1 style = {CSS}>Frequently Asked Questions!</h1>
      <br></br>
      <QuestionList leftData = {faq.left} rightData = {faq.right}/>
    </div>
  );
}

export default FAQ;