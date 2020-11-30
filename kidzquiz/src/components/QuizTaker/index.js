import React from "react";
// import "./style.css";

function Quiztaker(props) {

   
    return (
      
        <section className="container" id={props.id}>
            <div className="card" id="quizform">
                <div className="card-body">
                    <h1 className="card-title">{props.title}</h1>
                    <h2 className="subjecttitle">Subject: {props.subject}</h2>
                    <h2 className ="score card">Your Score: {props.score}/5</h2>
                    <form className="form-group">


                        <label className="label">{props.questiontext[0]}</label>
                        <div className="input-group-text">
                        </div>

                        <h3 className="answer1"  onClick={(event) => props.handleInputQ1A1(event)}>
                            {props.question[0].answertext[0]}
                        </h3>
                        <h3 className="answer2" onClick={(event) => props.handleInputQ1A2(event)} >
                            {props.question[0].answertext[1]}
                        </h3>
                        <h3 className="answer3" onClick={(event) => props.handleInputQ1A3(event)}>
                            {props.question[0].answertext[2]}
                        </h3>

                        <h3 className="answer4" value="correct" onClick={(event) => props.handleInputQ1Correct(event)}>
                            {props.question[0].answertext[3]}
                        </h3>

                        < hr />

                        <label className="label">{props.questiontext[1]}</label>
                        <div className="input-group-text">
                        </div>

                        <h3 className="answer1"  onClick={(event) => props.handleInputQ1A2(event)}>
                            {props.answertext[0]}
                        </h3>
                        <h3 className="answer2" onClick={(event) => props.handleInputQ1A2(event)} >
                            {props.answertext[1]}
                        </h3>
                        <h3 className="answer3" onClick={(event) => props.handleInputQ1A3(event)}>
                            {props.answertext[2]}
                        </h3>

                        <h3 className="answer4" value="correct" onClick={(event) => props.handleInputQ1Correct(event)}>
                            {props.answertext[3]}
                        </h3>

                        < hr />
                        <label className="label">{props.questiontext[2]}</label>
                        <div className="input-group-text">
                        </div>

                        <h3 className="answer1"  onClick={(event) => props.handleInputQ1A1(event)}>
                            {props.answertext[0]}
                        </h3>
                        <h3 className="answer2" onClick={(event) => props.handleInputQ1A2(event)} >
                            {props.answertext[1]}
                        </h3>
                        <h3 className="answer3" onClick={(event) => props.handleInputQ1A3(event)}>
                            {props.answertext[2]}
                        </h3>

                        <h3 className="answer4" value="correct" onClick={(event) => props.handleInputQ1Correct(event)}>
                            {props.answertext[3]}
                        </h3>

                        < hr />
                        <label className="label">{props.questiontext[3]}</label>
                        <div className="input-group-text">
                        </div>

                        <h3 className="answer1"  onClick={(event) => props.handleInputQ1A1(event)}>
                            {props.answertext[0]}
                        </h3>
                        <h3 className="answer2" onClick={(event) => props.handleInputQ1A2(event)} >
                            {props.answertext[1]}
                        </h3>
                        <h3 className="answer3" onClick={(event) => props.handleInputQ1A3(event)}>
                            {props.answertext[2]}
                        </h3>

                        <h3 className="answer4" value="correct" onClick={(event) => props.handleInputQ1Correct(event)}>
                            {props.answertext[3]}
                        </h3>

                        < hr />
                        <label className="label">{props.questiontext[4]}</label>
                        <div className="input-group-text">
                        </div>

                        <h3 className="answer1"  onClick={(event) => props.handleInputQ1A1(event)}>
                            {props.answertext[0]}
                        </h3>
                        <h3 className="answer2" onClick={(event) => props.handleInputQ1A2(event)} >
                            {props.answertext[1]}
                        </h3>
                        <h3 className="answer3" onClick={(event) => props.handleInputQ1A3(event)}>
                            {props.answertext[2]}
                        </h3>

                        <h3 className="answer4" value="correct" onClick={(event) => props.handleInputQ1Correct(event)}>
                            {props.answertext[3]}
                        </h3>

                        < hr />

                    </form>
                </div>
            </div>

        </section >





    );


}

export default Quiztaker;
