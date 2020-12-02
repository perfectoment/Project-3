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
            console.log("question created")
            setQuestion(newQuestion.data)
        })
    }



    return(
        <div className="container">
            <label className="label font size">What Would You Like To Ask?</label>
                <div className="input-group-text">
                    <input required className="wide" type="text" id="2" name="question" onChange={(event) => handleQtitle(event)} />
                </div>
                <button className="btn font alert green" onClick={handleQSubmit}>Create Question</button>
                {question.id ? (
                <div className="font size alert">YOU JUST MADE A NEW QUESTION!
                <p></p>
                <Link to={"/answermaker/" + props.match.params.id +"/" + question.id}>
                <button type="button" className="btn-primary">
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