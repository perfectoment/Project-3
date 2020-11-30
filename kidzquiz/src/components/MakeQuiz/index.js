import React from "react";
import "./style.css";


function MakeQuiz(props) {

    return (


        <section className="container" id="quizcontain">
            <div className="card" id="quizform">
                <div className="card-body">
                    <h5 className="card-title">MAKE A QUIZ</h5>

                    <form className="form-group">

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Subject
                        </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div class="dropdown-item" value="math" onChange={(event) => props.handleSubject(event)}>Math</div>
                                <div class="dropdown-item" value="science" onChange={(event) => props.handleSubject(event)} >Science</div>
                                <div class="dropdown-item" value="history" onChange={(event) => props.handleSubject(event)} >History</div>
                            </div>
                        </div>

                        <label className="label">Name Quiz</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputNameQuiz(event)} />
                        </div>

                        <label className="label">Input Question 1</label>
                        <div className="input-group-text">
                            <input required type="text" id="2" name="question" onChange={(event) => props.handleInputQ1(event)} />
                        </div>


                        <label className="label">Wrong Answers</label>
                        <div className="input-group-text">
                            <input required type="text" name="answer1" onChange={(event) => props.handleInputQ1A1(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer2" onChange={(event) => props.handleInputQ1A2(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer3" onChange={(event) => props.handleInputQ1A3(event)} />
                        </div>

                        <label className="label">Correct Answer</label>
                        <div className="input-group-text">
                            <input required type="text" name="correctAnswer" value ="correct" onChange={(event) => props.handleInputQ1Correct(event)} />
                        </div>

                        < hr />

                        <label className="label">Input Question 2</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputQ2(event)} />
                        </div>


                        <label className="label">Wrong Answers</label>
                        <div className="input-group-text">
                            <input required type="text" name="answer1" onChange={(event) => props.handleInputQ2A1(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer2" onChange={(event) => props.handleInputQ2A2(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer3" onChange={(event) => props.handleInputQ2A3(event)} />
                        </div>

                        <label className="label">Correct Answer</label>
                        <div className="input-group-text">
                            <input required type="text" name="correctAnswer" value ="correct" onChange={(event) => props.handleInputQ2Correct(event)} />
                        </div>

                        < hr />

                        <label className="label">Input Question 3</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputQ3(event)} />
                        </div>


                        <label className="label">Wrong Answers</label>
                        <div className="input-group-text">
                            <input required type="text" name="answer1" onChange={(event) => props.handleInputQ3A1(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer2" onChange={(event) => props.handleInputQ3A2(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer3" onChange={(event) => props.handleInputQ3A3(event)} />
                        </div>

                        <label className="label">Correct Answer</label>
                        <div className="input-group-text">
                            <input required type="text" name="correctAnswer" value="correct" onChange={(event) => props.handleInputQ3Correct(event)} />
                        </div>

                        < hr />

                        <label className="label">Input Question 4</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputQ4(event)} />
                        </div>


                        <label className="label">Wrong Answers</label>
                        <div className="input-group-text">
                            <input required type="text" name="answer1" onChange={(event) => props.handleInputQ4A1(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer2" onChange={(event) => props.handleInputQ4A2(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer3" onChange={(event) => props.handleInputQ4A3(event)} />
                        </div>

                        <label className="label">Correct Answer</label>
                        <div className="input-group-text">
                            <input required type="text" name="correctAnswer" value ="correct" onChange={(event) => props.handleInputQ4Correct(event)} />
                        </div>

                        < hr />

                        <label className="label">Input Question 5</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputQ5(event)} />
                        </div>


                        <label className="label">Wrong Answers</label>
                        <div className="input-group-text">
                            <input required type="text" name="answer1" onChange={(event) => props.handleInputQ5A1(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer2" onChange={(event) => props.handleInputQ5A2(event)} />
                        </div>
                        <div className="input-group-text">
                            <input required type="text" name="answer3" onChange={(event) => props.handleInputQ5A3(event)} />
                        </div>

                        <label className="label">Correct Answer</label>
                        <div className="input-group-text">
                            <input required type="text" name="correctAnswer" value="correct" onChange={(event) => props.handleInputQ5Correct(event)} />
                        </div>

                        < hr />

                        <button className="btn btn-success" type="submit" onClick={(event) => props.handleSubmitQuiz(event)}>Create Quiz</button>


                    </form>
                </div>
            </div>

        </section >


    );
}

export default MakeQuiz;