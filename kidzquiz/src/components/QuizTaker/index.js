import React from "react";
import "./style.css";

function Quiztaker(props) {
console.log(props)
   
    return (
      
        <section className="container" id={props.id}>
            <div className="card" id="quizform">
                <div className="card-body">
                    <h1 className="card-title">{props.title}</h1>
                    <h2 className="subjecttitle">Subject: {props.subject}</h2>
                       
                    <form className="form-group">


                        <label className="label"></label>
                        <div className="input-group-text">
                        
                        </div>
                    {props.question.map(questions =>{
                        return(
                            <div>
                            <h3>{questions.questiontext}</h3>
                        <button className="answer1"  onClick={(event) => props.handleClick(event)}>
                            {questions.Answers[0].answertext}
                        </button>
                        <button className="answer2" onClick={(event) => props.handleClick(event)} >
                            {questions.Answers[1].answertext}
                        </button>
                        <button className="answer3" onClick={(event) => props.handleClick(event)}>
                            {questions.Answers[2].answertext}
                        </button>

                        <button className="answer4" value="correct" onClick={(event) => props.handleClickCorrect(event)}>
                            {questions.Answers[3].answertext}
                        </button>
                        </div>
                    )})}
                   
                     


                    </form>
                </div>
            </div>

        </section >





    );


}

export default Quiztaker;
