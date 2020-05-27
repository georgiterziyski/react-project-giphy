
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegisterForm from './RegisterModal';

const Register = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="mt-3">
      <Button color="" onClick={toggle} className="btn-sm">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Регистрирай потребител</ModalHeader>
        <ModalBody>
            <RegisterForm setModal={setModal}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Register;