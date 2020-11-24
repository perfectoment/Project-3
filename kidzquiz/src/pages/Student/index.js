import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import StudentSubject from "../../StudentSubject";
import Wrapper from "../../Wrapper";

class Subject extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <StudentSubject />
                <Footer />
            </Wrapper>

        );
    }
}

export default Subject;