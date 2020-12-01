import React from "react"
import API from "../../utils/API";
import {Link} from "react-router-dom"
import {useState} from "react"



function QuestionCreate(props){
    console.log(props)
    const [questiontext, setQuestionText]= useState("");
    const[question, setQuestion]=useState({});

    const handleQtitle = event =>{
        event.preventDefault()
        setQuestionText(event.target.value)
        console.log(questiontext)
    }

    const handleQSubmit = event =>{
        event.preventDefault()
        API.createQuestion({
            questiontext:questiontext,
            QuizId:props.match.params.id
        }).then(function(newQuestion){
            setQuestion(newQuestion.data)
        })
    }



    return(
        <div className="container">
            <label className="label">Please Create a Question</label>
                <div className="input-group-text">
                    <input required type="text" id="2" name="question" onChange={(event) => handleQtitle(event)} />
                </div>
                <button className="btn" onClick={handleQSubmit}>Create Question</button>
                {question.id ? (
                <div>YOU JUST MADE A NEW QUESTION
                <p></p>
                <Link to={"/answermaker/" + question.id +"/" + props.match.params.id}>
                <button type="button">
                     Make Some Possible Answers
                </button>
                </Link>
                </div> 
                    ) : (
                    console.log("chump")
                    )}
                </div>


    )}


export default QuestionCreate