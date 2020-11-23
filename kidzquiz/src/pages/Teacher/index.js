import { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuizBankT from "../../components/QuizBankT";
import Wrapper from "../../components/Wrapper";

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