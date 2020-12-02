import React, { useState } from "react";
import "./style.css";




function StudentQuizBank(props) {

    return (

        <div className="d-flex container" id="quizbank">
        {props.children}

        </div>

    )
}


export default StudentQuizBank;