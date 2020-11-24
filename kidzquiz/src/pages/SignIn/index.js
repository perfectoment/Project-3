import { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignInForm from "../../components/SignIn";
import Wrapper from "../../components/Wrapper";

class SignIn extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <SignInForm />
                <Footer />
            </Wrapper>

        );
    }
}

export default SignIn;