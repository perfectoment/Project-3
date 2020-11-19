import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import QuizBankT from "../../QuizBankT";
import Wrapper from "../../Wrapper";

class MakeQuiz extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <QuizBankT />
                <Footer />
            </Wrapper>

        );
    }
}

export default MakeQuiz;