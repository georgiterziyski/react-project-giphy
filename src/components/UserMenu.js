import React from 'react';
import {useSelector} from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';
const UserMenu = () => {
    const currentUser = useSelector(state => state.currentUser);
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
        <NavItem>
            <NavLink
                tag={RRNavLink}
                exact to="/logout"
                activeClassName="active">
                Log out
            </NavLink>
        </NavItem>
    </>
}

export default UserMenu;