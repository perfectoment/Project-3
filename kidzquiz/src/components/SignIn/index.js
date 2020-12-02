import React, { useState } from "react";
import "./style.css";
import Modal from 'react-modal';


Modal.setAppElement('#root')

function SignInModal(props, handleSubmit) {
  const [modalIsOpen, setModalIsOpen] = useState(false)


  return (

    <div className="container">
      <button className="btn moving font green btn-hover" onClick={() => setModalIsOpen(true)}>START</button>

      <Modal id="Modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>


        <section className="container" id="signform">
          {/* <div className="card text-center col-sm-8 m-5 p-3" id="dataform"> */}
            <form className="form-group">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" name="email" id="email-input" type="text" placeholder="Email" onChange={(event) => props.handleInputEmail(event)} />
                </div>
                <br />
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" name="password" id="password-input" placeholder="Password" onChange={(event) => props.handleInputPassword(event)} />
                </div>
              </div>
              <br />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="student" id="defaultCheck1" onChange={(event) => props.handleInputStudent(event)} />
                <label className="form-check-label text-white" for="defaultCheck1">Student</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="teacher" id="defaultCheck2" onChange={(event) => props.handleInputTeacher(event)} />
                <label className="form-check-label text-white" for="defaultCheck2">Teacher</label>
              </div>
              <br />
              <div className="field">
                <p className="control">
                  <p className="control">
                    <button className="btn moving font green btn-hover" id="signupbutton" onClick={(event) => props.handleSubmit(event)}>SIGN UP</button>
                    <button className="btn moving font green btn-hover" id="signoutbutton" onClick={(event) => props.handleLogoutSubmit(event)}>LOG OUT</button >
                    <button className="btn moving font green btn-hover" id="loginbutton" onClick={(event) => props.handleLoginSubmit(event)}>LOG IN</button >
                  </p>
                </p>
              </div>
            </form>
          {/* </div> */}
        </section >

      </Modal>
    </div>

  );

}



export default SignInModal;
