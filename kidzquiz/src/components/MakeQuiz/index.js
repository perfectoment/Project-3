import React from "react";
import "./style.css";


function MakeQuiz(props) {

    return (


        <section className="container">
            <div className="card" id="quizform">
                <div className="card-body">
                    <h5 className="card-title">MAKE QUIZ</h5>

                    <form className="form-group">


                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Subject
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div class="dropdown-item" value ="math"  onChange={(event) => props.handleMath(event)}>Math</div>
                            <div class="dropdown-item" value ="science"  onChange={(event) => props.handleScience(event)} >Science</div>
                            <div class="dropdown-item" value="history" onChange={(event) => props.handleHistory(event)} >History</div>
                        </div>
                        </div>

                        <label className="label">Input Question</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputQuestion(event)} />
                        </div>


                        <label className="label">Wrong Answers</label>
                        <div className="input-group-text">
                            <input required type="text" name="answer1" onChange={(event) => props.handleInputAnswer1(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer2" onChange={(event) => props.handleInputAnswer2(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer3" onChange={(event) => props.handleInputAnswer3(event)}/>
                        </div>

                        <label className="label">Correct Answer</label>
                        <div className="input-group-text">
                            <input required type="text" name="correctAnswer" onChange={(event) => props.handleInputCorrect(event)}/>
                        </div>

                        <button className="btn btn-success" type="submit" onClick={(event) => props.handleSubmit(event)}>Create Quiz</button>

                    </form>
                </div>
            </div>
        </section >


    );
}

export default MakeQuiz;