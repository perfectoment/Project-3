import React, { useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import { Link } from "react-router-dom"




function StudentQuizCard(props) {
    return (
        <div className="container">
            <div className="col">
                <div className="card text-dark text-left rounded flex-row" id="selectQuiz" >
                    <div className="card-header text-left text-white" >{`${props.subject}`}
                        <h5 className="card-body text-dark text-left font-weight-bold" >{`${props.title}`}</h5>
                        <h6 className="card-text font-italic" >{`${props.description}`}</h6>
                    </div>
                </div>
                <Link to={"/quiz/" + props.id}>
                    <button  id ="ryan" className="btn font green btn-hover">
                        TakeQuiz
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default StudentQuizCard;
