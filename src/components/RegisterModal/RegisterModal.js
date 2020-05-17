import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatchAddUser = () => {
        dispatch(addUser({
            username,
            email,
            userType: 'regular',
            password,
        }));
    }
        return <form>
        <div className="form-group">
            <label htmlFor="user-name">Потребителско име</label>
            <input 
                type="text"
                className="form-control"
                onChange={e => setUsername(e.target.value)}
                id="user-name" 
                placeholder="Въведи потребителско име"/>
        </div>
        <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                id="register-email"
                placeholder="Въведи email"/>
        </div>
        <div className="form-group">
            <label htmlFor="register-password">Парола</label>
            <input 
                type="password" 
                className="form-control" 
                onChange={e => setPassword(e.target.value)}
                id="register-password" 
                placeholder="Въведи парола"/>
        </div>
        <button type="button" className="btn" onClick={dispatchAddUser}>Регистрирай се!</button>
    </form>
    }

    export default RegisterForm;