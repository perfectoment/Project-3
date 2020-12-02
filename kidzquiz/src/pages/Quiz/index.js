
// import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Quiztaker from "../../components/QuizTaker";
import Wrapper from "../../components/Wrapper";
import React, {useState, useEffect} from "react"
import API from "../../utils/API"

function QuizTime(props) {

    const [result, setResult] = useState([]);
    let [score, setScore] = useState(0)

    useEffect(() => {
        if (result.length < 1) {

            console.log("quiz/index.js", props.match.params.id)
            API.getQuiz(props.match.params.id)
                .then(data => {
                    console.log(data)
                    setResult(data.data);
                })
        }

    },[]);

const handleClick = event =>{
    event.preventDefault()
    console.log("You Big Dummy")
}

 const handleClickCorrect = event =>{
    event.preventDefault()
    setScore(score+= 1)
}

        return (

            <Wrapper>
                {/* <Header /> */}
                {result.map(quiz => (
                <Quiztaker
                question={quiz.Questions}
                title={quiz.title}
                subject={quiz.subject}
                // questiontext={quiz.questiontext}
                handleClick={handleClick}
                handleClickCorrect={handleClickCorrect}

                 
                />
                
                ))}
                <Footer />
            </Wrapper>

        );
    }


export default QuizTime;