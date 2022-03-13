import QuestionList from "./QuestionList";
import faq from "../../data/faq.json"

const FAQ = () => {

  const CSS = {
    color: "#000000",
    letterSpacing:"10px",
    textAlign:"center",
  }

  return (
    <div>
      <h1 className='section-title' style = {CSS}>FREQUENTLY ASKED QUESTIONS</h1>
      <QuestionList leftData = {faq.left} rightData = {faq.right}/>
    </div>
  );
}

export default FAQ;