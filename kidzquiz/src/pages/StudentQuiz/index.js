import { Component } from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import QuizCardS from "../../components/QuizCardS/index";
import Wrapper from "../../components/Wrapper/index";

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