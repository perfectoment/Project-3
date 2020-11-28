import { Component } from 'react';
import Title from "../../components/Title";
import SignInModal from "../../components/SignIn";
import Wrapper from "../../components/Wrapper";

class SignIn extends Component {

    handleSubmit = event => {
        event.preventDefault()
    }
    

    render() {
        return (

            <Wrapper>
                <Title/>
                <SignInModal handleSubmit={this.handleSubmit}
                />
            </Wrapper>

        );
    }
}

export default SignIn;