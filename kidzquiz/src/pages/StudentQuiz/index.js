import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import QuizCardS from "../../QuizCardS";
import Wrapper from "../../Wrapper";

class Subject extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <QuizCardS />
                <Footer />
            </Wrapper>

        );
    }
}

export default Subject;