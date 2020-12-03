import { Component } from 'react';
import SignIn from "../src/pages/SignIn"
import Student from "../src/pages/Student"
import Quiz from "../src/pages/Quiz"
import Teacher from "../src/pages/Teacher"
import QuestionCreate from "../src/pages/QuestionCreate"
import Answermaker from "../src/pages/Answermaker"
// import {useState} from "react-router-dom"

// let [authenticate, setAuthenticate] = useState("")



import {
  BrowserRouter,
  Route
} from "react-router-dom";
import "./App.css";


function App() {
  
    return (
      
      <BrowserRouter basename="/">


         {/* <Route path="/student" component={Student} /> */}

      {/* <Navbar /> */}
      <Route exact path="/" component={SignIn} />
      <Route path ="/student" component ={Student}/>
      <Route path ="/quiz/:id" component ={Quiz}/>
      <Route path="/teacher" component={Teacher} />
      <Route exact path="/questionmaker/:id" component={QuestionCreate} />
      <Route exact path="/answermaker/:qid/:id" component={Answermaker} />
       
        {/* {
          localStorage.user === "student" ? 
          <>
          

          
          <Route path="/student" component={Student} /> 
          <Route path ="/quiz/:id" component={Quiz}/>
          

          </>
          :
          <>
        
          <Route path="/teacher" component={Teacher} />
          <Route exact path="/questionmaker/:id" component={QuestionCreate} />
          <Route exact path="/answermaker/:qid/:id" component={Answermaker} />
          </>
        } */}
          {/* {/* <Route exact path="/" component={SignIn} />
          <Route path="/student" component={Student} />

          <Route path="/studentquiz" component={QuizTime} />
      <Route path="/teacher" component={Teacher} /> */}

      </BrowserRouter> 

    );
  }


export default App;