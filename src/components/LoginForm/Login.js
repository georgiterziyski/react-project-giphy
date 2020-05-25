
import React, { useState } from 'react';
import { NavLink, Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

const Login = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <NavLink type="button" color="" onClick={toggle}>{buttonLabel}</NavLink>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader margin="0"toggle={toggle}>Влез</ModalHeader>
        <ModalBody>
            <LoginForm setModal={setModal}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;