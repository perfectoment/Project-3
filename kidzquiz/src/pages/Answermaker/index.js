import React from "react"
import {useState} from "react"
import API from "../../utils/API"
import {Link} from "react-router-dom"



function Answermaker(props){

  
  const [answers, setAnswers] = useState([{}])


  const handleAnswer = (event) =>{
      console.log(event)
      event.preventDefault()
    API.createAnswer([
        {answertext:event.target.elements.answer1.value,
        correct:false,
        },
        {answertext:event.target.elements.answer2.value,
         correct:false   
        },
        {answertext:event.target.elements.answer3.value,
        correct:false   
        },
        {answertext:event.target.elements.correct.value,
         correct:true   
        },
    ],
        props.match.params.id
    ).then(function(data){
        console.log("sumbit")
        setAnswers(data.data)

    })
  }



return(

<div className="container">
    <form className="form" id="answerform" onSubmit={handleAnswer}>
    <label className="label font size">Please Enter Your Incorrect Answers Below</label>
        <div className="input-group-text">
            <input required type="text" id="answer1" name="answer1"/>
        </div>
        <div className="input-group-text">
            <input required type="text" id="answer2" name="answer2"/>
        </div>
        <div className="input-group-text">
            <input required type="text" id="answer3" name="answer3"/>
        </div>

        <label className="label font size">Please Enter The Correct Answer</label>
        <div className="input-group-text">
            <input required type="text" id="correct" name="correctAnswer" />
        </div>
            <button className="green font size" >Submit Answers</button>
            </form>  
        < hr />
        {answers.id ? (
                <>
                <div>DO YOU WANT TO MAKE ANOTHER QUESTION?
                <p></p>
                <Link to={"/questionmaker/" + props.match.params.id}>
                <button type="button">
                     Make Another Question
                </button>
                </Link>
                <Link to={"/"}>
                <button type="button">
                     Quit
                </button>
                </Link>
                </div> 
                </>
                    ) : (
                    console.log("chump")
                    )}
                </div>
                    






)


}

export default Answermaker