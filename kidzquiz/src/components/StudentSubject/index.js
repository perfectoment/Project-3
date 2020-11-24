import React, { useState } from "react";
import "./style.css";
import Modal from 'react-modal';


Modal.setAppElement('#root')

function StudentSubject() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <main className="container">
            <div className="StudentQuizList">
                <button onClick={() => setModalIsOpen(true)}>MATH</button>
                <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>




                </Modal>
            </div>

            <div className="StudentQuizList">
                <button onClick={() => setModalIsOpen(true)}>HISTORY</button>
                <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>




                </Modal>
            </div>

            <div className="StudentQuizList">
                <button onClick={() => setModalIsOpen(true)}>SCIENCE</button>
                <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>




                </Modal>
            </div>


        </main>


    );

}

export default StudentSubject;