import React from 'react';
import "./style.css";

 

function TakeQuiz(props) {

    // const [questions, setQuestions] = useState([]);
        
    return (
        
        
        <div className="container">
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className="text-2xl">
                    {props.questiontext}
                </h2>
            </div>
            <div className="flex flex-wrap mt-4 justify-around">
            <button className="big-white w-2/5 p-4 text-purple-800"> {props.answertext} </button>
            <button className="big-white w-2/5 p-4 text-purple-800"> {props.answertext} </button>
            <button className="big-white w-2/5 p-4 text-purple-800"> {props.answertext} </button>
            <button className="big-white w-2/5 p-4 text-purple-800"> {props.answertext} </button>
            </div>
        </div>
        
        
        
        
    )

    };

export default TakeQuiz;

