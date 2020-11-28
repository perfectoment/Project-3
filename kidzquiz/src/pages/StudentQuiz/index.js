import { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StudentQuizCard from "../../components/StudentQuizCard";
import Wrapper from "../../components/Wrapper";

class QuizTime extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <StudentQuizCard />
                <Footer />
            </Wrapper>

        );
    }
}

export default QuizTime;