import React, { useEffect, useState }  from "react";

import Footer from "../../components/Footer";
// import StudentSubject from "../../components/StudentSubject";
import StudentQuizBank from "../../components/StudentQuizBank";
import StudentQuizCard from "../../components/StudentQuizCard"
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API"
// import Quiztaker from "../../components/QuizTaker";




function Student(props) {

    const [result, setResult] = useState([]);
    
    useEffect(() => {
       
        API.getAllQuizzes({})
            .then(data => {
                console.log(data)
                setResult(data.data);
            })
            
        
    } ,[])

   
    

    return (
        <>{result ? (
        <Wrapper>
            <StudentQuizBank>

                {result.map(quiz => (
                    <StudentQuizCard

                        id={quiz.id}
                        subject={quiz.subject}
                        title={quiz.title}
                        description={quiz.description}
                    />

                ))}

            </StudentQuizBank>
            <Footer />
        </Wrapper>

    
) : (
    <div>loading...</div>
  )}</>
      
    );
}


export default Student;
