import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import StudentQuizCard from "../../StudentQuizCard";
import Wrapper from "../../Wrapper";

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