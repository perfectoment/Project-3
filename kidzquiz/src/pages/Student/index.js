import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import StudentSubject from "../../components/StudentSubject";
import StudentQuizBank from "../../components/StudentQuizBank";
// import StudentQuizCard from "../../components/StudentQuizCard";
import Wrapper from "../../components/Wrapper";

function Student() {

    return (


            <Wrapper>
                <Header />
                 <StudentSubject />
                {/* <StudentQuizBank >
                    <StudentQuizCard />
                </StudentQuizBank> */}
                <Footer />
            </Wrapper>

        <Wrapper>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <StudentSubject />
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