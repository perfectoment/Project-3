import React from "react"
import {useState} from "react"



function Answermaker(){

  const [answertext, setAnswertext] = useState([{}])


  const handleAnswer = () =>{
    console.log("hello")
  }



return(

<div className="container">

    <label className="label">Wrong Answers</label>
        <div className="input-group-text">
            <input required type="text" name="answer1" />
        </div>
        <div className="input-group-text">
            <input required type="text" name="answer2"/>
        </div>
        <div className="input-group-text">
            <input required type="text" name="answer3" />
        </div>

        <label className="label">Correct Answer</label>
        <div className="input-group-text">
            <input required type="text" name="correctAnswer" value ="correct" />
        </div>
            <button onSubmit={handleAnswer}>TEXT TEXT</button>
            
        < hr />



</div>




)


}

export default Answermaker