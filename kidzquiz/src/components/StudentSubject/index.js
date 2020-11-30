import React, { useState } from "react";
import "./style.css";
import Maths from "../assets/math.png";
import Spelling from "../assets/spell.png";
import World from "../assets/world.png";


function StudentSubject(props) {

    return (

        <main className="container">

            <div className="column" id="icons">

                <h1 className="text-light">SELECT A SUBJECT</h1>

                <h3 className="text-light">MATH</h3>
                <div className="StudentQuizList">
                    <img className="subject div-thumbnail" value="Math" onClick={(event) => props.sortSubject(event)} src={Maths} alt="Math"></img>
                </div><br />

                <h3 className="text-light">SPELLING</h3>
                <div className="StudentQuizList">
                    <img className="subject div-thumbnail" value="Spelling" onClick={(event) => props.sortSubject(event)} src={Spelling} alt="Spelling"></img>
                </div><br />

                <h3 className="text-light">HISTORY</h3>
                <div className="StudentQuizList">
                    <img className="subject div-thumbnail" value="World" onClick={(event) => props.sortSubject(event)} src={World} alt="World"></img>
                </div>
            </div>
        </main>


    );

}

export default StudentSubject;