import React from "react";
import "./style.css";



function StudentQuizCard(props) {



    
    return (

        <div className="card text-warning text-center rounded flex-row" id={props.id}>
        
            <div className="card-body">{`${props.title}`}
            
            <img className="card-img-top" src={props.icon} alt={`${props.title}`}/>    
            </div>

            <button className="delete">DELETE</button>
    
        </div>

    );
}

export default StudentQuizCard;
