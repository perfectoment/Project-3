import { Component } from 'react';

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import StudentSubject from "../../StudentSubject";
import Wrapper from "../../components/Wrapper/index";



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