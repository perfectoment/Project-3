import React from "react";
import "./style.css";



function TeacherQuizBank(props) {

        return (

                <section className="container" id="teachcont">
                        <div className="card" id="meow">
                                <div className="card-body">
                                        <h5 className="card-title">QUIZZES</h5>

                                        {props.children}

                                </div>
                        </div>
                </section>

        );
}

export default TeacherQuizBank;