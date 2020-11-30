
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
                    <div className="col-6">
                        <MakeQuiz />
                    </div>
                    <div className="col-6">
                        <TeacherQuizBank />
                    </div>
                </div>

            </Wrapper>

            </div>




        </Wrapper>

    );
}


export default Teacher;
