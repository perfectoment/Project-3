import React, { useState } from "react";
import "./style.css";




function StudentQuizBank(props) {

    const[result, setResult]=useState([]);

    useEffect((id) => {
        API.getAllQuizzes()
        .then(data => {
            setResult(data.data);
        })
          })

    return (
        {result.map((quiz) => (
        <StudentQuizCard
            title
        />
    
        ))
    }
    );
}


    

export default StudentQuizBank;