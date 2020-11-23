import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import QuizSubjectS from "../../QuizSubjectS";
import Wrapper from "../../Wrapper";

class Subject extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <QuizSubjectS />
                <Footer />
            </Wrapper>

        );
    }
}

export default Subject;