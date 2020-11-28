import { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import StudentSubject from "../../components/StudentSubject";
import Wrapper from "../../components/Wrapper";

class Subject extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                {/* <StudentSubject /> */}
                <Footer />
            </Wrapper>

        );
    }
}

export default Subject;