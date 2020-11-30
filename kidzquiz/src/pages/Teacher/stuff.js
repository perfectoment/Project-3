import { useState } from "react"
import Header from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import MakeQuiz from "../../components/MakeQuiz";
import TeacherQuizBank from "../../components/TeacherQuizBank";
import API from "../../utils/API";
// import TeacherQuizCard from "../../components/TeacherQuizCard";

/**
 * quiz = {
 *   questions: [{
 *      text: "Question?",
 *      answers: [
 *          {
 *              text: "Answer",
 *              isValid: true or false
 *          }
 *      ]
 *      }
 *   ]
 * }
 * 
 * const [quiz, setQuiz ] = useState({});
 * let newQuiz = {..quiz};
 * newQuiz.questions.push()
 * setQuiz(newQuiz);
 * 
 */
function Teacher() {
    const [subject, setSubject] = useState("");
    const [quizname, setQuizname] = useState("");
    const [question, setQuestion]= useState("")
    const [correct, setCorrect]= useState(0)
    const [answertext, setanswertext]= useState([])
    const[title, setTitle]= useState("")
    const[description, setDescription] =useState("")
    const [quiz, setQuiz] = useState({});
    const [question1, setquestion1]=useState({question: "", answer:[{a:""}]} )




    // let newQuiz ={...quiz};
    // newQuiz.questions.push()
    // newQuiz.questions.answers.push();
    // setQuiz(newQuiz);
    

    // const [title, set]
const handleSubject = event =>{
    event.preventDefault()
    setSubject(event.target.value)
}

const handleInputNameQuiz = event =>{
    event.preventDefault(
    setQuizname(event.target.value)
    )
}

const handleInputQ1 = event =>{
    event.preventDefault()
    setQuestion(event.target.value)
}


 const handleInputQ1A1 = event =>{
    event.preventDefault()
    setanswertext(event.target.value)
    
}

const handleInputQ3A1 = event =>{
    event.preventDefault()
    setanswertext(event.target.value)
    
}

const handleInputQ1Correct = event =>{
    event.preventDefault()
    
}

// API.
//     createQuiz(

//         ).then
    


    return (

        <Wrapper>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <MakeQuiz 
                        handleSubject={handleSubject}
                        handleInputNameQuiz={handleInputNameQuiz}
                        subject={subject}
                        quizname={quizname}

                        />
                    </div>
                    <div className="col-6">
                        <TeacherQuizBank />
                    </div>
                </div>
            </div>



        </Wrapper>

    );
}


export default Teacher;

{/* <TeacherQuizCard /> */ }