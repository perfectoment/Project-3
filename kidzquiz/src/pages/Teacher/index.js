import { useState } from "react"
import Header from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import MakeQuiz from "../../components/MakeQuiz";
import TeacherQuizBank from "../../components/TeacherQuizBank";
import API from "../../utils/API";
// import TeacherQuizCard from "../../components/TeacherQuizCard";


function Teacher() {
    const [subject, setSubject] = useState("");
    const [quizname, setQuizname] = useState("");
    const [question, setQuestion]= useState("")
    const [correct, setCorrect]= useState(0)
    const [answertext, setanswertext]= useState("")
    const[title, setTitle]= useState("")
    const[description, setDescription] =useState("")


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
    
}

const handleInputQ3A1 = event =>{
    event.preventDefault()
    
}

const handleInputQ1Correct = event =>{
    event.preventDefault()
    
}

// API.
//     makequiz()
//     makequestion()
    



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

                        />
                    </div>
                    <div className="col-6">
                        <TeacherQuizBank />
                    </div>
                </div>

            </Wrapper>

            </div>




        </Wrapper>

    );
}


export default Teacher;
