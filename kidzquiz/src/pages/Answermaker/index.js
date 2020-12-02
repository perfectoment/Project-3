import React from "react"
import {useState} from "react"
import API from "../../utils/API"
import {Link} from "react-router-dom"
import "./style.css"



function Answermaker(props){
  console.log("props answermaker", props)
  
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
        console.log(data)
        setAnswers(data.data)

    })
  }



return(

<div className="container flex">
    <form className="form" id="answerform" onSubmit={handleAnswer}>
    <label className="label font size" id="enteri">Please Enter Your Incorrect Answers Below</label>
        <div className="input-group-text" id="itg">
            <input required type="text wide" id="answer1" name="answer1"/>
        </div>
        <div className="input-group-text" id="itg">
            <input required type="text wide" id="answer2" name="answer2"/>
        </div>
        <div className="input-group-text" id="itg">
            <input required type="text wide" id="answer3" name="answer3"/>
        </div>

        <label className="label font size" id="enterc">Please Enter The Correct Answer</label>
        <div className="input-group-text" id="itg">
            <input required type="text wide" id="correct" name="correctAnswer" />
        </div>
            <button className="btn moving font green btn-hover" id="submitb">Submit Answers</button>
            </form>  
        < hr />
        {
            console.log(answers),
        
        answers === [] ? 
                <>
                {console.log("champion")}
               
                </>
                     : 
                     <>
                     <div className="font size alert">DO YOU WANT TO MAKE ANOTHER QUESTION?
                <p></p>
                <Link to={"/questionmaker/" + props.match.params.qid}>
                <button className="green" type="button">
                     Make Another Question
                </button>
                </Link>
                <Link to={"/"}>
                <button className="green" id="quit" type="button">
                     Quit
                </button>
                </Link>
                </div> 

                    </>
                    }
                </div>
                    






)


}

export default Answermaker