import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm';

class Login extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center align-items-center container">
                <LoginForm/>   
            </div>
        )
    }
}

export default Login;
