import React from "react";
import "./style.css";



function StudentQuizBank(props) {

    return (


        <div className="d-flex container">
        {props.children}

        </div>


    );
}

export default StudentQuizBank;