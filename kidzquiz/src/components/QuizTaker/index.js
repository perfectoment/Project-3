import React from "react";
// import "./style.css";

function Quiztaker(props) {

   
    return (
      
        <section className="container" id={props.id}>
            <div className="card" id="quizform">
                <div className="card-body">
                    <h1 className="card-title">{props.title}</h1>
                    <h2 className="subjecttitle">Subject: {props.subject}</h2>
                    <form className="form-group">


                        <label className="label">{props.questiontext}</label>
                        <div className="input-group-text">
                        </div>

                        <button className="answer1"  onClick={(event) => props.handleClickW1(event)}>
                            {props.question.answertext[0]}
                        </button>
                        <button className="answer2" onClick={(event) => props.handleClickW2(event)} >
                            {props.question.answertext[1]}
                        </button>
                        <button className="answer3" onClick={(event) => props.handleClickW3(event)}>
                            {props.question.answertext[2]}
                        </button>

                        <button className="answer4" value="correct" onClick={(event) => props.handleClickCorrect(event)}>
                            {props.question.answertext[3]}
                        </button>

                        < hr />


                    </form>
                </div>
            </div>

        </section >





    );


}

export default Quiztaker;
