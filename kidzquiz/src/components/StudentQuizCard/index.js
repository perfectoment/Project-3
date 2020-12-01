import React, { useEffect } from "react";
import API from "../../utils/API";
import "./style.css";



function StudentQuizCard(props) {




    
    return (

        <div className="card text-warning text-center rounded flex-row" id={props.id}  onClick={() => props.handleClick(props.id)}>
        
            <div className="card-body">{`${props.title}`}
            
            <img className="card-img-top" src={props.icon} alt={`${props.title}`}/>    
            </div>
    
        </div>

    );
}

export default StudentQuizCard;
