import React from "react";
import "./style.css";


function MakeQuestion(props) {

    return (


        <section className="container">
            <div className="card" id="quizform">
                <div className="card-body">
                    <h5 className="card-title">ADD A QUESTION</h5>

                    <form className="form-group">

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

                        <button className="btn btn-success" type="submit" onClick={(event) => props.handleSubmitQuestion(event)}>Add A Question</button>
                        <button className="btn btn-success" type="submit" onClick={(event) => props.handleSubmitQuiz(event)}>Create Quiz</button>

                    </form>
                </div>
            </div>
        </section >


    );
}

export default MakeQuestion;