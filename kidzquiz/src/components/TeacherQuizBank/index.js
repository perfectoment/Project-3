import React from "react";
import "./style.css";



function TeacherQuizBank(props) {

        return (

                <section className="container" id="teachcont">
                        <div className="card" id="meow">
                                <div className="card-body">
                                        <h5 className="card-title">QUIZZES</h5>

                                        {props.children}

                                        <label className="label">Name Quiz</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputNameQuiz(event)} />
                        </div>

                        <label className="label">Input Question 1</label>
                        <div className="input-group-text">
                            <input required type="text" name="question" onChange={(event) => props.handleInputQ1(event)} />
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
                            <input required type="text" name="correctAnswer" onChange={(event) => props.handleInputQ1Correct(event)} />
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
                            <input required type="text" name="correctAnswer" onChange={(event) => props.handleInputQ2Correct(event)} />
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
                            <input required type="text" name="correctAnswer" onChange={(event) => props.handleInputQ3Correct(event)} />
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
                            <input required type="text" name="correctAnswer" onChange={(event) => props.handleInputQ4Correct(event)} />
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
                            <input required type="text" name="correctAnswer" onChange={(event) => props.handleInputQ5Correct(event)} />
                        </div>

                                </div>
                        </div>
                </section>

        );
}

export default TeacherQuizBank;