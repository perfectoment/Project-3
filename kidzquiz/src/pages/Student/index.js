import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import StudentSubject from "../../components/StudentSubject";
import StudentQuizBank from "../../components/StudentQuizBank";
// import StudentQuizCard from "../../components/StudentQuizCard";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API"
import Quiztaker from "../../components/QuizTaker";




function Student() {

    return (

        <Wrapper>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Quiztaker 
                        // id={id}
                        // title={title}
                        // subject={subject}
                        // questiontext={questiontext}
                        // answertext={answertext}
                        />
                    </div>
                    <div className="col-6">
                        <StudentQuizBank />
                    </div>
                </div>
            </div>




            <Footer />
        </Wrapper>

    );
}


export default Student;

{/* <StudentQuizCard /> */ }