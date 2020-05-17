import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {editUser} from '../redux/actions';


const ProfileForm = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUser);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatchEditUser = () => {
        dispatch(editUser({
            _id: currentUser._id,
            username,
            password,
            gifs: currentUser.gifs
        }));
    }

    useEffect(() => {
        if(Object.keys(currentUser).length){
            setUsername(currentUser.username);
        }
    }, [currentUser]);

    return  <div className="row">
        <div className="col-md-3">
                <form>
                <div className="form-group">
                    <label htmlFor="username">Име</label>
                    <input type="text"
                        className="form-control"
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                        id="first-name" 
                        placeholder="Въведи име"/>
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
                <button type="button" className="btn btn-success" onClick={dispatchEditUser}>Запази</button>
            </form>
        </div>
</div>
    
    
    
}

export default ProfileForm;