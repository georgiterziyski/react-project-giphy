import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions';
import Register from "../RegisterModal/Register";

const LoginForm = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatchLogin = () => {
      dispatch(login({
          email,
          password,
      }));
  }

  
    return <form>
        <h1 className="mb-5 text-uppercase align-text-center">Вход</h1>
        <div className="form-group">
          <input
            id="email"
            type="text"
            className="form-control rounded-pill form-control-lg"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
            className="form-control rounded-pill form-control-lg"
            placeholder="Парола"
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        <button id="login-button" onClick={dispatchLogin} className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">
          Влез
        </button>
        <div className="align-text-center">
        <h5 className="mt-5">Нямаш акаунт?</h5>
        <Register buttonLabel="Регистрирай се!"/>
        </div>
      </form>
}

export default LoginForm;
