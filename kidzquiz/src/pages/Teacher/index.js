
import Header from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import MakeQuiz from "../../components/MakeQuiz";
import TeacherQuizBank from "../../components/TeacherQuizBank";
// import TeacherQuizCard from "../../components/TeacherQuizCard";


function Teacher() {


        return (

            <Wrapper>
                <Header />
                <div className="container">
                <div className="row">
                <MakeQuiz />
                </div>
                <div className="row">
                <TeacherQuizBank />
                </div>
                </div>
                   
        
        
            </Wrapper>

        );
    }


export default Teacher;

{/* <TeacherQuizCard /> */}