import React from 'react';
import "./style.css";

 

function TakeQuiz() {

    // const [questions, setQuestions] = useState([]);
        
    return (
        
        
        <div className="container">
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className="text-2xl">
                    This is where the question will go.
                </h2>
            </div>
            <div className="flex flex-wrap mt-4 justify-around">
            <button className="big-white w-2/5 p-4 text-purple-800"> Answer 1 </button>
            <button className="big-white w-2/5 p-4 text-purple-800"> Answer 2 </button>
            <button className="big-white w-2/5 p-4 text-purple-800"> Answer 3 </button>
            <button className="big-white w-2/5 p-4 text-purple-800"> Answer 4 </button>
            </div>
        </div>
        
        
        
        
    )

    };

export default TakeQuiz;

// function TakeQuiz() {

//     const [questions, setQuestions] = useState([]);
        
//     useEffect(()=> {
//         fetch(API).
//         .then((res) => res.json())
//         .then((data)=>{
//             setQuestions(data.results);
//         });
//     }, []);


//     return (


        
//         <div className="container">
//             <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
//                 <h2 className="text-2xl">
//                     This is where the question will go.
//                 </h2>
//             </div>
//             <div className="grid cols-2 gap-6 mt-4">
//             <button className="big-white w-2/5 p-4 text-purple-800"> {questions[0].correct_answer} </button>
//             <button className="big-white w-2/5 p-4 text-purple-800"> {questions[0].incorrect_answers} </button>
//             <button className="big-white w-2/5 p-4 text-purple-800"> {questions[0].incorrect_answers[1]}</button>
//             <button className="big-white w-2/5 p-4 text-purple-800"> {questions[0].incorrect_answers[2]} </button>
//             </div>
//         </div>
        
        
        
        
//     )

//     };

// export default TakeQuiz;
