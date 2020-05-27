import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';

const UserMenu = () => {

    const currentUser = useSelector(state => state.currentUser);

    const dispatch = useDispatch();

    const dispatchLogout = async () => {
       await dispatch(logout());
       window.location = "/";
    }
    return <> <NavItem> 
            <NavLink
                tag={RRNavLink}
                exact to="/favourites"
                activeClassName="active">
                Favorites
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
                tag={RRNavLink}
                exact to="/profile"
                activeClassName="active">
                <div className="d-flex align-items-center ml-3 text-white">
                    <i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>
                    <div>{currentUser.username}</div>
                </div>
            </NavLink>
        </NavItem>
        <div className="ml-3">
            <button id="logout-button" type="button" onClick={dispatchLogout} className="btn">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>
        </div>
    </>
}

export default UserMenu;