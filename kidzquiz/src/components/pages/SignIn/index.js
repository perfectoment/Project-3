import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import SignInForm from "../../SignIn";
import Wrapper from "../../Wrapper";

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