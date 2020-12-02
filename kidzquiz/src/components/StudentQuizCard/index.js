import React, { useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import {Link} from "react-router-dom"



function StudentQuizCard(props) {



    return (

        <div className="card text-light text-center rounded flex-row" id="selectQuiz" >
            <div className="card-body" />{`${props.subject}`}
            <div className="card-header" />{`${props.title}`}
            <p className="card-text" />{`${props.description}`}

            <Link to={"/quiz/" + props.id}> 
                <button type="button">
                    TakeQuiz
            </button>
             </Link>

        </div>

    );
}

export default StudentQuizCard;



