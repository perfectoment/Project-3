import React from "react";
import "./style.css";




function MakeQuiz() {

    return (


        <section className="container">
            <div className="card" id="quizform">
                <div className="card-body">
                    <h5 className="card-title">MAKE QUIZ</h5>

                    <form className="form-group" id="" onSubmit={(event) => props.handleSubmit(event)}>

                        <label className="label">Question Input</label>
                        <div className="input-group-text">
                            <input type="text" className="form-control" id="question" onInput={(event) => props.handleInputQuestion(event)} />
                        </div>


                        <label className="label">Answer Input</label>
                        <div className="input-group-text">
                            <input type="text" className="form-control" id="answer1" onInput={(event) => props.handleInput(event)} />
                        </div>
                        <div className="input-group-text">
                            <input type="text" className="form-control" id="answer2" onInput={(event) => props.handleInput(event)} />
                        </div>
                        <div className="input-group-text">
                            <input type="text" className="form-control" id="answer3" onInput={(event) => props.handleInput(event)} />
                        </div>
                        <div className="input-group-text">
                            <input type="text" className="form-control" id="correctAnswer" onInput={(event) => props.handleInput(event)} />
                        </div>

                        <button className="btn btn-success" type="submit" />

                    </form>
                </div>
            </div>
        </section >


    );
}

export default MakeQuiz;