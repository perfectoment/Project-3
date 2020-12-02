import React, { useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import {Link} from "react-router-dom"



function StudentQuizCard(props) {

    




    return (

        <div className="card text-light text-center rounded flex-row" id="selectQuiz" >
            <div className="card-body boogaloo" >{`${props.subject}`}</div>
            <h1 className="card-header boogaloo" >{`${props.title}`}</h1>
            <h3 className="card-text boogaloo" >{`${props.description}`}</h3>

            <Link to={"/quiz/" + props.id}> 
                <button type="button">
                    TakeQuiz
            </button>
             </Link>

        </div>

    );
}

export default StudentQuizCard;



