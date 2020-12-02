import React from "react"
import {useState} from "react"
import API from "../../utils/API";
import {Link} from "react-router-dom"
import "./style.css"





function Quizcreate(){

 const [subject, setSubject]= useState("");
 const [title, setTitle]= useState("");
 const[description, setDescription]= useState("")
 const[quiz, setQuiz]=useState({});

 const handleSubject = event =>{
     console.log("event.target")
    //  event.preventDefault()
     setSubject(event.target.dataset.value)
     console.log(event.target)
     console.log(subject)
 }

 const handleInputNameQuiz = event =>{
     event.preventDefault()
     setTitle(event.target.value)
     console.log(title)
 }
 const handleInputDescriptionQuiz = event =>{
     event.preventDefault()
     setDescription(event.target.value)
     console.log(description)

 }

 const handleQuizSubmit = event =>{
     console.log("hello")
     event.preventDefault()
     API.createQuiz({
        subject:subject,
        description:description,
        title:title,
     }).then(function(newQuiz){
         console.log(newQuiz)
         setQuiz(newQuiz.data)
     }
         
     )
 }

return(

    <div className="container">
        <div class="dropdown">
                <button className="btn btn-success dropdown-toggle font" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Choose a Subject!
            </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown-item" data-value="math" onClick={handleSubject}>Math</div>
                    <div className="dropdown-item" data-value="science" onClick={handleSubject} >Science</div>
                    <div className="dropdown-item" data-value="history" onClick={handleSubject} >History</div>
                </div>
            </div>
            <label className="label font">Name Your Quiz!</label>
                <div className="input-group-text input">
                    <input required type="text" name="question" onChange={(event) => handleInputNameQuiz(event)} />
                </div>
                <label className="label font">Add Description!</label>
                <div className="input-group-text input">
                    <input required type="text" name="question" onChange={(event) => handleInputDescriptionQuiz(event)} />
                </div>
                <button className="btn green font" onClick={handleQuizSubmit}>Create Quiz</button>
                {quiz.id ? (
                <div className="alert font size">YOU JUST MADE A QUIZ CALLED {quiz.title}!
                <p></p>
                <Link to={"/questionmaker/" + quiz.id}>
                <button className="moving font btn-primary" type="button">
                     Make Some Questions
                </button>
                </Link>
                </div> 
                    ) : (
                    console.log("chump")
                    )}

    </div>





)

}

export default Quizcreate



