import { Component } from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import QuizSubjectS from "../../components/QuizSubjectS/index";
import Wrapper from "../../components/Wrapper/index";

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