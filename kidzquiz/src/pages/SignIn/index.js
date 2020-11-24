import { Component } from 'react';
import Title from "../../components/Title";
import SignInModal from "../../components/SignIn";
import Wrapper from "../../components/Wrapper";

class SignIn extends Component {



    render() {
        return (

            <Wrapper>
                <Title />
                <SignInModal/>
            </Wrapper>

        );
    }
}

export default SignIn;