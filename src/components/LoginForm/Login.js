
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

const Login = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex align-items-center ml-2">
      <Button type="button" color="" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader margin="0"toggle={toggle}>Влез</ModalHeader>
        <ModalBody>
            <LoginForm/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;