import React, { Component } from "react";
import { Form } from "reactstrap";
import RegisterModal from "../RegisterModal/RegisterModal";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  
  render() {
    return (
      <Form class="login-forM">
        <h1 class="mb-5">Вход</h1>
        <div class="form-group">
          <input
            id="email"
            type="text"
            class="form-control"
            placeholder="Email"
          ></input>
        </div>
        <div class="form-group">
          <input
            id="password"
            type="password"
            class="form-control"
            placeholder="Парола"
          ></input>
        </div>
        <button id="login-button" type="submit" class="btn">
          Влез
        </button>
        <p class="mt-3">
          Нямаш акаунт?{" "}
          <a href="#">
            <strong>Регистрирай се!</strong>
          </a>
        </p>
      </Form>
    );
  }
}

export default LoginForm;
