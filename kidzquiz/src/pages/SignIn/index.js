import React, {useState} from 'react';
import {useHistory} from "react-router-dom"
import Title from "../../components/Title";
import SignInModal from "../../components/SignIn";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API"



// I think this is what we need

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
   const history = useHistory()

    const handleSubmit = event =>{
        event.preventDefault()
        API.createUser(
            {email:email, 
            password:password, 
            role:role}
        ).then(
            localStorage.setItem("user", role)
        )
            if(localStorage.getItem("user")==="student"){
            history.push("/student")}
            else if(localStorage.getItem("user")==="teacher"){
                history.push("/teacher")
            }
      
    }
    
     const handleInputEmail = event =>{
         event.preventDefault()
        setEmail(event.target.value)
    };
    
     const handleInputPassword = event => {
         event.preventDefault()
        setPassword(event.target.value)
    };
    
     const handleInputStudent = event => {
         event.preventDefault()
        setRole(event.target.value)
    };
     const handleInputTeacher = event => {
         event.preventDefault()
        setRole(event.target.value)
    };
     const handleLoginSubmit = event =>{
         event.preventDefault()
         API.loginUser({
            email:email,
            password:password,
            role:role,
         })   

     };
    
     const handleLogoutSubmit = event =>{
         event.preventDefault()
         console.log("LOGGING OUT")
          localStorage.removeItem("user")
             history.push("/")
        
     }
     

        return (

            <Wrapper>
                <Title/>
                <SignInModal handleSubmit={handleSubmit}
                    handleInputEmail={handleInputEmail}
                    handleInputPassword={handleInputPassword}
                    handleInputStudent={handleInputStudent}
                    handleInputTeacher={handleInputTeacher}
                    handleLoginSubmit={handleLoginSubmit}
                    handleLogoutSubmit={handleLogoutSubmit}
                    
                    
                />
            </Wrapper>

        );
    }

export default SignIn;

