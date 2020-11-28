import React, { useState } from "react";
import "./style.css";
import Modal from 'react-modal';
import Maths from "../assets/math.png";
import Spelling from "../assets/spelling.png";
import World from "../assets/world.png";


Modal.setAppElement('#root')

function StudentSubject() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <main className="container">
            <div className="StudentQuizList">
                <img className="subject div-thumbnail" onClick={() => setModalIsOpen(true)} src={Maths} alt="Math"></img>
                <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>


                </Modal>
            </div>

            <div className="StudentQuizList">
                <img className="subject div-thumbnail" onClick={() => setModalIsOpen(true)} src={Spelling} alt="Spelling"></img>
                <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>

                </Modal>
            </div>

            <div className="StudentQuizList">
                <img className="subject div-thumbnail" onClick={() => setModalIsOpen(true)} src={World} alt="World"></img>
                <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>


                </Modal>
            </div>


        </main>


    );

}

export default StudentSubject;