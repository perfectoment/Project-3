import React from "react";
import "./style.css";




function MakeQuiz() {

    return (


        <section className="container">
            <div className="card" id="quizform">
                <div className="card-body">
                    <h5 className="card-title">MAKE QUIZ</h5>

                    <form className="form-group" ref="" onSubmit={(event) => props.handleSubmit(event)}>


                        <label className="label">Select Subject</label>
                        <div className="input-group-text">
                            <input required type="text" name="subject" />
                        </div>

                        <label className="label">Input Question</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" />
                        </div>


                        <label className="label">Wrong Answers</label>
                        <div className="input-group-text">
                            <input required type="text" name="answer1" />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer2" />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer3" />
                        </div>

                        <label className="label">Correct Answer</label>
                        <div className="input-group-text">
                            <input required type="text" name="correctAnswer" />
                        </div>

                        <button className="btn btn-success" type="submit" />

                    </form>
                </div>
            </div>
        </section >


    );
}

export default MakeQuiz;