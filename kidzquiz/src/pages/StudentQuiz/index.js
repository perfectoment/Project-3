import { Component } from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import StudentQuizList from "../../components/StudentQuizList/index";
import Wrapper from "../../components/Wrapper/index";

class Subject extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <StudentQuizList />
                <Footer />
            </Wrapper>

        );
    }
}

export default Subject;