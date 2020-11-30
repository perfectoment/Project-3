import React from "react"
import {useState} from "react"
import API from "../../utils/API";


function Quizcreate(){

 const [subject, setSubject]= useState("");
 const [title, setTitle]= useState("");
 const[description, setDescription]= useState("")

 const handleSubject = event =>{
     console.log("event.target")
    //  event.preventDefault()
     setSubject(event.target.value)
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
     }).then(function(res){
         console.log(res)
     }
         
     )
 }

return(

    <div className="container">
        <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Subject
            </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="dropdown-item" value="math" onChange={handleSubject}>Math</div>
                    <div class="dropdown-item" value="science" onChange={handleSubject} >Science</div>
                    <div class="dropdown-item" value="history" onChange={handleSubject} >History</div>
                </div>
            </div>
            <label className="label">Name Quiz</label>
                <div className="input-group-text">
                    <input required type="text" name="question" onChange={(event) => handleInputNameQuiz(event)} />
                </div>
                <label className="label">Add Description</label>
                <div className="input-group-text">
                    <input required type="text" name="question" onChange={(event) => handleInputDescriptionQuiz(event)} />
                </div>
                <button className="btn" onClick={handleQuizSubmit}>Create Quiz</button>


    </div>





)

}

export default Quizcreate