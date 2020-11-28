import { Component } from 'react';
import Title from "../../components/Title";
import SignInModal from "../../components/SignIn";
import Wrapper from "../../components/Wrapper";
// import Header from "../../components/Header/index"

class SignIn extends Component {



    render() {
        return (

            <Wrapper>
                {/* <Header/> */}
                <Title />
                <SignInModal/>
            </Wrapper>

        );
    }
}

export default SignIn;